import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import MealList from '../components/MealsList/MealList';
import { MEALS } from '../data/dummy-data';
import { RootState } from '../store/redux/store';
//import { FavouritesContext } from '../store/context/context';

function FavoritesScreen() {
    //const favoriteCtx = useContext(FavouritesContext);
    const favoriteMealIds = useSelector((state:RootState) => state.favoriteMeals.ids);
    console.log('=====favoriteMealIds=====', favoriteMealIds);
    const favoriteMeals = favoriteMealIds?.map((mealId) => {
        return MEALS.find((meal) => meal.id === mealId);
    });
    console.log(favoriteMeals);
    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.textColor}>No favorite meals found. Start adding some!</Text>
            </View>
        );
    }
        
    return (
        <MealList items={favoriteMeals} />
    )
}

export default FavoritesScreen;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textColor: {
        color: 'white'
    }
});
