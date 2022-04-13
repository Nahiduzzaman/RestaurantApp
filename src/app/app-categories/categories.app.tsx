import React from 'react';
import { FlatList } from 'react-native';
import CategoryGridTile from './components/category-grid-tile/category-grid-tile.component';

import { CATEGORIES } from '../../mock/dummy-data';

function CategoriesScreen({ navigation } : any) {
  console.log(navigation);
  function renderCategoryItem(itemData: any) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
