import React, { useState } from "react";
import { createContext } from "react";

export const FavouritesContext = createContext({
    ids:[],
    addFavorite: (id:any) => {},
    removeFavorite: (id:any) => {}
});

function FavouritesContextProvider({children}:any) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);
    function addFavorite(id:any) {
        setFavoriteMealIds((currentFavoriteMealIds) => {
            return [...currentFavoriteMealIds, id] as never;
        });
    }

    function removeFavorite(id:any) {
        setFavoriteMealIds((currentFavoriteMealIds) => {
            return currentFavoriteMealIds.filter((mealId:any) => mealId !== id);
        });
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}

export default FavouritesContextProvider;