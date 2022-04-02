import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        ids: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            console.log("addFavorite",action);
            const { id } = action.payload;
            console.log(id);
            if (!state.ids.includes(id as never)) {
                state.ids.push(id as never);
            }
        },
        removeFavorite: (state, action) => {
            const { id } = action.payload;
            const index = state.ids.indexOf(id as never);
            if (index !== -1) {
                state.ids.splice(index, 1);
            }
        }
    }
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;