import React from 'react';
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../../mock/dummy-data';
import MealList from '../app-shared/meal-list.component';

function MealsOverviewScreen({ route, navigation }: any) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealList items={displayedMeals} />;
}

export default MealsOverviewScreen;


