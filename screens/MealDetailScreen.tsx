import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import List from '../components/List';

import MealDetails from '../components/MealDetails';
import Subtitle from '../components/Subtitle';
import { MEALS } from '../data/dummy-data';
import { addFavorite, removeFavorite} from '../store/redux/favorites';
// import { FavouritesContext } from '../store/context/context';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { RootState } from '../store/redux/store';

function MealDetailScreen({ route, navigation }: any) {
  // const favoriteCtx = useContext(FavouritesContext);
  const favoriteMealIds = useSelector((state:RootState) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId as never);
  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id:mealId }));
    }
    else {
      // favoriteCtx.addFavorite(mealId);
      dispatch(addFavorite({ id:mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Text
            style={mealIsFavorite ? styles.iconColorWhite : styles.iconColorBlack}
            onPress={changeFavoriteStatusHandler}
          >O</Text>
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
  iconColorBlack: {
    color: 'black'
  },
  iconColorWhite: {
    color: 'white'
  }
});

