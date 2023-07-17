import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const WeatherCard = (props) => {
  const { weather, main, text, temp, icon, maxTemp } = props;
  let cardWidth = main ? "14rem" : "12rem";
  return (
    <div>
      <Card style={{ width: cardWidth }}>
        <Card.Img variant="top" src={`../weatherIcons/${icon}.svg`} />
        <Card.Body>
          <hr />
          <Card.Title>{main ? text : daysInWeek[text]}</Card.Title>
          <Card.Text>{main ? temp : `${temp} - ${maxTemp}`} &#8451;</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeatherCard;
