import React from "react";
import WeatherCard from "./WeatherCard";
import "../weather.css";
const WeatherList = (props) => {
  const { weatherList } = props;
  return (
    <div className="list">
      {weatherList.map((weather, index) => {
        let day = new Date(weather.Date);
        return (
          <div className="itemList">
            <WeatherCard
              key={index}
              weather={weather}
              temp={weather.Temperature.Minimum.Value}
              maxTemp={weather.Temperature.Maximum.Value}
              main={false}
              icon={weather.Day.Icon}
              text={day.getDay()}
              day={day.getDay()}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WeatherList;
