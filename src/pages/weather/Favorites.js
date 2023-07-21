import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherCard from "./components/WeatherCard";
import { useNavigate } from "react-router-dom";
import { apiCall } from "./weatherAip";
import { getFavoritesWeather } from "./urls";
import { weatherAction } from "../../store/weatherSlice";
const Favorites = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const weatherMap = useSelector((state) => {
    return state.weather.favortiteMap;
  });
  const handleClick = (obj) => {
    //console.log(obj, "click", obj.Key);
    navigate("/weatherHome", { state: { obj: obj } });
  };
  const getFavorites = async () => {
    let url = getFavoritesWeather;
    const data = await apiCall("GET", null, url);
    console.log("data", data);
    if (data.status === "ok") {
      dispatch(weatherAction.setFavorites(data.favorites));
    }
  };
  useEffect(() => {
    console.log("effect fave");
    if (Object.keys(weatherMap).length === 0) {
      getFavorites();
    }
  }, []);
  return (
    <div className="mainFavorite">
      {Object.keys(weatherMap).map((Key, index) => {
        return (
          <div
            className="mainCard"
            onClick={() => handleClick(weatherMap[Key])}
          >
            <h2>{weatherMap[Key].EnglishName}</h2>
            <WeatherCard
              weather={weatherMap[Key]}
              temp={weatherMap[Key].Temperature.Metric.Value}
              main={true}
              icon={weatherMap[Key].WeatherIcon}
              text={weatherMap[Key].WeatherText}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
