import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Menu from "./components/Menu";

const countries = [
  {
    name: "Italy",
    cities: [{ name: "Milano" }, { name: "Rome" }, { name: "Napoli" }],
  },
  { name: "Germany", cities: ["Berlin", "Munich", "Hamburg"] },
  { name: "Israel", cities: "Jerusalem" },
  {
    name: "USA",
    cities: [
      { name: "New-York" },
      { name: "Los-Angeles", cities: [{ name: "San-Diego" }] },
    ],
  },
];
const NestedDropDown = () => {
  const renderMenuItem = (menuItem) => {
    console.log(menuItem);
    if (Array.isArray(menuItem.cities) && menuItem.cities.length > 0) {
      console.log("in if", menuItem.cities);
      return (
        <Dropdown drop="end">
          <Dropdown.Toggle variant="secondary" id={menuItem.label}>
            {menuItem.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {menuItem.cities.map((child, index) => (
              <div key={index}>{renderMenuItem(child)}</div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      );
    }
    console.log(menuItem.name);
    return menuItem.name ? <div>{menuItem.name}</div> : <div>{menuItem}</div>;
  };
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="nested-dropdown-toggle">
          Menu
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {countries.map((menuItem, index) => (
            <React.Fragment key={index}>
              {renderMenuItem(menuItem)}
            </React.Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default NestedDropDown;
