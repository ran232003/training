import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import debounce from "lodash.debounce";
import { autoCompleteApi } from "../urls";
import { apiCall } from "../weatherAip";
import { autoCompleteMock } from "../mockData";
import { useDispatch } from "react-redux";
import { weatherAction } from "../../../store/weatherSlice";
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
];
const Search = (props) => {
  const [searchArray, setSearchArray] = useState([]);
  const dispatch = useDispatch();
  const handleChange = async (e) => {
    //console.log(e.target.value);
    let url = autoCompleteApi + e.target.value;
    let data = await apiCall("GET", null, url);
    //let data = autoCompleteMock;
    setSearchArray(data);

    //console.log(data);
  };
  const handleSelect = async (event, value) => {
    // console.log(value);
    //  let t = value.substring(0, value.indexOf(" "));
    // console.log(t, "asdasd");
    if (value) {
      const location = searchArray.find((location) => {
        console.log(
          location.LocalizedName,
          value.substring(0, value.indexOf(" "))
        );
        return value.includes(location.LocalizedName) === true
          ? location
          : null;
      });
      console.log("calling location", location);
      await props.getLocation(location);
      dispatch(weatherAction.mainWeather(location));
    }
  };
  const debouncedOnChange = debounce(handleChange, 500);
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        onChange={handleSelect}
        id="free-solo-demo"
        options={searchArray.map(
          (option) =>
            `${option.LocalizedName}  (${option.Country.LocalizedName})`
        )}
        renderInput={(params) => (
          <TextField
            onChange={debouncedOnChange}
            {...params}
            label="Location"
          />
        )}
      />
    </Stack>
  );
};

export default Search;
