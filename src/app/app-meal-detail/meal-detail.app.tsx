import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import List from '../app-shared/meal-list.component';

import MealDetails from '../app-shared/meal-details.components';
import Subtitle from './components/subtitle/subtitle.component';
import { MEALS } from '../../mock/dummy-data';
import { FavouritesContext } from '../../context/context';
import styles from './app-meal-detail.style';

function MealDetailScreen({ route, navigation }: any) {
  const favoriteCtx = useContext(FavouritesContext);
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteCtx.ids.includes(mealId as never);
  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteCtx.removeFavorite(mealId);
    }
    else {
      favoriteCtx.addFavorite(mealId);
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


