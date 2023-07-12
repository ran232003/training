import React from "react";
import { Dropdown } from "react-bootstrap";

const Menu = () => {
  return (
    <div>
      {" "}
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </div>
  );
};

export default Menu;
