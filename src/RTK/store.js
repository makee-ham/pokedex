import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, pokemonSlice } from "./\bslice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});
