import React from "react";
import AutoInput from "./components/AutoInput";
import "./AutoCompleteComp.css";
import PokeCard from "./components/PokeCard";
// Please implement the following requirements:

// Dropdown menu height of autocomplete should contain 5 items
// When reaching the bottom of the dropdown load next 20 items (/src/api/Pokemons)
// When typing in a search bar perform debounced search with 300ms delay
// If no items found in the previously loaded items, perform search for item by name (/src/api/Pokemon)
// Please cache loaded items
// When clicking on an item in dropdown load card like on picture below (/src/api/Pokemon) (this data should be cached also)
const AutoCompleteComp = () => {
  return (
    <div className="autoCompleteMain">
      <AutoInput />
      <PokeCard />
    </div>
  );
};

export default AutoCompleteComp;
