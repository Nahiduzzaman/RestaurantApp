import React, { useContext } from 'react';
import MealList from '../app-shared/meal-list.component';
import { MEALS } from '../../mock/dummy-data';
import { FavouritesContext } from '../../context/context';

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