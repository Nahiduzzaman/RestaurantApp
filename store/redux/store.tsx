import React from "react";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorites';

export const store = configureStore({
    reducer: {
        favoriteMeals: favoritesReducer
    }
});

export const rootReducer = combineReducers({
    favoriteMeals: favoritesReducer
});
  
export type RootState = ReturnType<typeof rootReducer>