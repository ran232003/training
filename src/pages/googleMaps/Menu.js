import React, { useState, useRef } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import CompassCalibrationIcon from "@mui/icons-material/CompassCalibration";
import "./google.css";
import { Button, Form } from "react-bootstrap";
import { TextField } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
const Menu = (props) => {
  const [inputs, setInputs] = useState({
    origin: "",
    destination: "",
  });
  const [searchResult, setSearchResult] = useState(null);
  const [searchResult2, setSearchResult2] = useState(null);
  //const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const handleSubmit = () => {};
  const handleChange = (event, inputField) => {
    return setInputs({ ...inputs, [inputField]: event.target.value });
  };
  const handleChange2 = (inputField) => {
    if (!searchResult || !searchResult2) {
      alert("Please enter text");
    } else if (inputField === "origin") {
      const place = searchResult[inputField].getPlace();
      //   console.log(place);
      //variable to store the name from place details result
      const name = place.name;

      //variable to store the formatted address from place details result
      const formattedAddress = place.formatted_address;
      // console.log(place);
      //console log all results
      //   console.log(`Name: ${name}`);
      //   console.log(`Formatted Address: ${formattedAddress}`);
      setInputs({ ...inputs, [inputField]: formattedAddress });
    } else {
      const place = searchResult2[inputField].getPlace();
      //   console.log(place);
      //variable to store the name from place details result
      const name = place.name;

      //variable to store the formatted address from place details result
      const formattedAddress = place.formatted_address;
      // console.log(place);
      //console log all results
      //   console.log(`Name: ${name}`);
      //   console.log(`Formatted Address: ${formattedAddress}`);
      setInputs({ ...inputs, [inputField]: formattedAddress });
    }
  };
  const handleCenter = () => {
    props.handleCenter();
  };
  const onLoad = (autocomplete, field) => {
    if (!searchResult) {
      setSearchResult({ [field]: autocomplete });
    } else {
      setSearchResult({ ...searchResult, [field]: autocomplete });
    }
  };
  const onLoad2 = (autocomplete, field) => {
    setSearchResult2({ [field]: autocomplete });
  };
  const calculateRoute = async () => {
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    // eslint-disable-next-line no-undef
    const res = await directionService.route({
      origin: inputs.origin,
      destination: inputs.destination,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    console.log("res", res.routes[0].legs[0].distance.text.split(" ")[0]);
    props.setDirections(res);
    let dis =
      parseFloat(
        res.routes[0].legs[0].distance.text.split(" ")[0].replace(",", "")
      ) * 1.609;
    dis = dis.toFixed(2);
    console.log("distance", dis, res.routes[0].legs[0].distance.text);
    console.log("duration", res.routes[0].legs[0].duration.text);

    setDistance(dis);
    setDuration(res.routes[0].legs[0].duration.text);
  };
  const clearInputs = () => {
    setInputs({
      origin: "",
      destination: "",
    });
    props.setDirections(null);
    setDistance(null);
    setDuration(null);
  };
  return (
    <div className="mainMenu">
      <div className="searchBox">
        <div className="inputs2">
          <Autocomplete
            onLoad={(autoComplete) => onLoad(autoComplete, "origin")}
            className="menuInputText"
            onPlaceChanged={() => handleChange2("origin")}
          >
            <Form.Control
              value={inputs.origin}
              onChange={(e) => handleChange(e, "origin")}
              type="text"
              placeholder="Origin"
            />
          </Autocomplete>
          <Autocomplete
            onLoad={(autoComplete) => onLoad2(autoComplete, "destination")}
            className="menuInputText"
            onPlaceChanged={() => handleChange2("destination")}
          >
            <Form.Control
              value={inputs.destination}
              onChange={(e) => handleChange(e, "destination")}
              type="text"
              placeholder="Destination"
            />
          </Autocomplete>

          <Button
            className="menuInputButton" /* Add a class for styling */
            variant="primary"
            type="submit"
            onClick={calculateRoute}
          >
            Calculate Distance
          </Button>
          <button onClick={clearInputs} className="clear-button" type="button">
            X
          </button>
        </div>
        <div className="secondRow">
          <TextField
            className="input-field2"
            id="standard-basic"
            label="Distance"
            variant="standard"
            value={distance ? `${distance}km` : ""}
          />
          <TextField
            className="input-field2"
            id="standard-basic"
            label="Duration"
            variant="standard"
            value={duration ? duration : ""}
          />
          <CompassCalibrationIcon
            onClick={handleCenter}
            className="compass-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
