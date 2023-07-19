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
import WeatherList from "./components/WeatherList";
import Loading from "../../components/LoadingSpinners";
import { loadingAction } from "../../store/loadingData";
import { apiHelpFunction } from "./helperFunc";
import { useLocation } from "react-router-dom";
const HomePage = () => {
  const location = useLocation();
  console.log("location", location);
  const [favorite, setFavorite] = useState(false);

  const dispatch = useDispatch();
  const weatherMain = useSelector((state) => {
    return state.weather.weatherMain;
  });
  const favoriteMap = useSelector((state) => {
    return state.weather.favortiteMap;
  });
  const fiveDaysWeather = useSelector((state) => {
    return state.weather.fiveDaysWeather;
  });
  const currentWeather = useSelector((state) => {
    return state.weather.currentWeather;
  });

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const getLocation = async (location) => {
    await timeout(1000);
    let mock;
    if (location) {
      mock = false;
      const results = await apiHelpFunction(location, null, mock);
      if (results) {
        dispatch(weatherAction.setFiveDaysWeather(results[1]));
        dispatch(weatherAction.setCurrentWeather(results[0][0]));
        dispatch(weatherAction.mainWeather(results[2]));
        dispatch(loadingAction.toggleLoading(false));
        checkFavorite(location.Key);
      }
    } else {
      navigator.geolocation.getCurrentPosition(async function (position) {
        mock = false;
        const results = await apiHelpFunction(location, position, mock);
        if (results) {
          dispatch(weatherAction.setFiveDaysWeather(results[1]));
          dispatch(weatherAction.setCurrentWeather(results[0][0]));
          dispatch(weatherAction.mainWeather(results[2]));
          dispatch(loadingAction.toggleLoading(false));
        }
      });
    }
  };

  const handleFavorite = () => {
    let fave = !favorite;

    let obj = {
      ...currentWeather,
      EnglishName: weatherMain.EnglishName
        ? weatherMain.EnglishName
        : weatherMain.LocalizedName,
      Key: weatherMain.Key,
    };
    dispatch(
      weatherAction.addFavorite({
        Key: weatherMain.Key,
        currentWeather: obj,
      })
    );

    setFavorite(fave);
  };
  const checkFavorite = (Key) => {
    console.log(Key);
    if (Key) {
      if (favoriteMap[Key]) {
        return setFavorite(true);
      } else {
        return setFavorite(false);
      }
    }
    if (favoriteMap[weatherMain?.Key]) {
      return setFavorite(true);
    } else {
      return setFavorite(false);
    }
  };
  useEffect(() => {
    if (!currentWeather) {
      console.log(currentWeather, "in effect");
      dispatch(loadingAction.toggleLoading(true));
      getLocation(null);
    } else if (location.state) {
      console.log("else efect", location.state);
      getLocation(location.state.obj);
      checkFavorite();
    }
  }, []);

  if (weatherMain && currentWeather && fiveDaysWeather) {
    return (
      <div>
        <div className="searchBar">
          <Search getLocation={getLocation} />
          <FavoriteBorderRoundedIcon
            onClick={handleFavorite}
            className="heartIcon"
            fontSize="large"
            style={{
              color: favorite ? "red" : null,
            }}
          />
        </div>
        <div className="mainCard">
          <h2>
            {weatherMain.EnglishName
              ? weatherMain.EnglishName
              : weatherMain.LocalizedName}
          </h2>
          <WeatherCard
            weather={currentWeather}
            temp={currentWeather.Temperature.Metric.Value}
            main={true}
            icon={currentWeather.WeatherIcon}
            text={currentWeather.WeatherText}
          />
        </div>
        <div>
          <h2>{fiveDaysWeather.Headline.Text}</h2>
          <WeatherList weatherList={fiveDaysWeather.DailyForecasts} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Loading />
      </div>
    );
  }
};

export default HomePage;
