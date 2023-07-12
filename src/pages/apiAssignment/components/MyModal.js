import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const MyModal = (props) => {
  const { modal, setModal, person } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => {
    //props.closeModal();
    setModal(false);
  };
  const handleShow = () => setModal(true);
  return (
    <div>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{person.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Name: {person.name}</Modal.Body>
        <Modal.Body>Height: {person.height} </Modal.Body>
        <Modal.Body>Gender: {person.gender} </Modal.Body>
        <Modal.Body>Birth: {person.birth_year}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyModal;
