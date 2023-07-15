import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
const WeatherCard = (props) => {
  const { weather, main } = props;
  console.log(weather);
  return (
    <div>
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src="../weatherIcons/1.svg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeatherCard;
