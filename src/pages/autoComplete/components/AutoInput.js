import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { apiCall } from "../../auth/apiCall";
import Popper from "@mui/material/Popper";
import { useDispatch } from "react-redux";
import { pokemonAction } from "../../../store/pokemonSlice";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
];

const AutoInput = () => {
  const dispatch = useDispatch();
  const [nextUrl, setNextUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );
  const [pokemons, setPokemons] = useState([]);
  const getPokemons = async () => {
    const data = await apiCall("GET", nextUrl);
    // console.log(data);
    if (data.results.length > 0 && pokemons.length > 0) {
      setNextUrl(data.next);
      const mergedArray = pokemons.concat(data.results);
      setPokemons(mergedArray);
    } else {
      setNextUrl(data.next);
      setPokemons(data.results);
    }
  };
  const handleScroll = (event) => {
    const listbox = event.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = listbox;

    // Check if the scroll position has reached the bottom
    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
      // Fetch more Pokémon data when the bottom is reached
      getPokemons();
    }
  };
  const handleChange = (event, newValue) => {
    //console.log("Selected Pokemon:", newValue);
    dispatch(pokemonAction.setPokemon(newValue));
  };
  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <div>
      <Autocomplete
        className="AutocompleteInput"
        disablePortal
        id="combo-box-demo"
        options={pokemons}
        onChange={handleChange}
        getOptionLabel={(pokemon) => pokemon.name}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Pokemon" />}
        ListboxProps={{
          style: {
            maxHeight: 187, // 5 items * 37.5px per item = 187
            overflow: "auto",
          },
          onScroll: handleScroll, //on scroll event
        }}
      />
    </div>
  );
};

export default AutoInput;
