import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./\bslice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
});
