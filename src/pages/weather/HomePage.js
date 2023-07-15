import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import "./weather.css";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useDispatch, useSelector } from "react-redux";
import { weatherAction } from "../../store/weatherSlice";
import { apiCall, getCurrentAndFive } from "./weatherAip";
import { currentWeatherApi, fiveDaysApi, locationApi } from "./urls";
import { MockLocation, currentWeather, fiveDays } from "./mockData";
import WeatherCard from "./components/WeatherCard";
const HomePage = () => {
  const [weather, setWeather] = useState();
  const [dataWeatherState, setDataWeather] = useState();
  const [weatherList, setWeatherList] = useState([]);
  const dispatch = useDispatch();
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      //   console.log("Latitude is :", position.coords.latitude);
      //   console.log("Longitude is :", position.coords.longitude);
      let url =
        locationApi +
        position.coords.latitude +
        "," +
        position.coords.longitude;
      //const dataWeather = await apiCall("GET", null, url);
      const dataWeather = MockLocation;
      setDataWeather(dataWeather);
      let currentWeatherUrl = currentWeatherApi.replace(
        "locationKey",
        dataWeather.Key
      );
      let fiveDaysUrl = fiveDaysApi.replace("locationKey", dataWeather.Key);
      //   let results = await getCurrentAndFive("GET", null, [
      //     currentWeatherUrl,
      //     fiveDaysUrl,
      //   ]);
      // console.log("res", results);
      //const fiveDaysData = await apiCall("GET", null, url);
      const results = [currentWeather, fiveDays];
      //   const fiveDaysData = fiveDays;
      //   console.log(fiveDaysData);
      //console.log(mock); //console.log(mock);
      //   dispatch(weatherAction.mainWeather(dataWeather));
      //   dispatch(weatherAction.setFiveDaysWeather(fiveDaysData));
      setWeatherList(results[1]);
      setWeather(results[0]);
    });
  };
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      <div className="searchBar">
        <Search />
        <FavoriteBorderRoundedIcon className="heartIcon" fontSize="large" />
      </div>
      <div className="mainCard">
        <h2>{dataWeatherState.EnglishName}</h2>
        <WeatherCard weather={weather} main={true} />
      </div>
    </div>
  );
};

export default HomePage;
