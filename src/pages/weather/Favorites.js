import React from "react";
import { useSelector } from "react-redux";
import WeatherCard from "./components/WeatherCard";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();

  const weatherMap = useSelector((state) => {
    return state.weather.favortiteMap;
  });
  const handleClick = (obj) => {
    console.log(obj, "click", obj.Key);
    navigate("/weatherHome", { state: { obj: obj } });
  };
  return (
    <div>
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
