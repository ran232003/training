import React from "react";
import { useSelector } from "react-redux";
import WeatherCard from "./components/WeatherCard";

const Favorites = () => {
  const weatherMap = useSelector((state) => {
    return state.weather.favortiteMap;
  });
  console.log(weatherMap);
  return (
    <div>
      {Object.keys(weatherMap).map((key, index) => {
        console.log(weatherMap[key]);
        return (
          <div className="mainCard">
            <h2>{weatherMap[key].EnglishName}</h2>
            <WeatherCard
              weather={weatherMap[key]}
              temp={weatherMap[key].Temperature.Metric.Value}
              main={true}
              icon={weatherMap[key].WeatherIcon}
              text={weatherMap[key].WeatherText}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
