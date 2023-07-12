import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../api.css";
import MyModal from "./MyModal";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../../store/loadingData";
const MyCard = (props) => {
  const dispatch = useDispatch();
  const [countLoad, setCountLoad] = useState(1);
  const { title, text, url, person, index, resultsLen, loadCount } = props;
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const onLoad = async () => {
    if (loadCount > resultsLen / 2) {
      dispatch(loadingAction.toggleLoading(false));
    }
  };
  return (
    <div className="cards">
      <Card style={{ width: "18rem" }} onClick={handleClick}>
        <Card.Img
          className="test"
          as={Image}
          variant="top"
          src={url}
          onLoad={onLoad}
        />
        <Card.Body className="cardBody">
          <Card.Title>{title}</Card.Title>
          <Card.Text>Click on me for more info</Card.Text>
        </Card.Body>
      </Card>
      <MyModal
        person={person}
        modal={modal}
        closeModal={closeModal}
        setModal={setModal}
      />
    </div>
  );
};

export default MyCard;
