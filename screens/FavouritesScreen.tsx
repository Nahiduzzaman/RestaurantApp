import React, { useContext } from 'react';
import MealList from '../components/MealsList/MealList';
import { MEALS } from '../data/dummy-data';
import { FavouritesContext } from '../store/context/context';

function FavoritesScreen() {
    const favoriteCtx = useContext(FavouritesContext);
    const favoriteMeals = favoriteCtx.ids.map((mealId) => {
        return MEALS.find((meal) => meal.id === mealId);
    });
    return (
        <MealList items={favoriteMeals} />
    )
}

export default FavoritesScreen;