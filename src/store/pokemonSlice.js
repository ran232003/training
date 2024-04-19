import { createSlice } from "@reduxjs/toolkit";
const PokemonSlice = createSlice({
  name: "pokemon",
  initialState: { pokemon: null },
  reducers: {
    setPokemon(state, action) {
      state.pokemon = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export default PokemonSlice;

export const pokemonAction = PokemonSlice.actions;
