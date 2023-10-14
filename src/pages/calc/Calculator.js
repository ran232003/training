import React, { useState } from "react";
import { digits, operators, operatorsMap } from "./data";
import "./calc.css";
const Calculator = () => {
  const [stringValue, setCalculate] = useState("");
  const [res, setRes] = useState("");
  const handleCalc = (value) => {
    if (stringValue.length > 16) {
      return;
    }
    console.log(stringValue.charAt(stringValue.length - 1));
    if (
      (operatorsMap[value] && !stringValue) ||
      (operatorsMap[stringValue.charAt(stringValue.length - 1)] &&
        operatorsMap[value])
    ) {
      return;
    }
    setCalculate(stringValue + value);
    if (!operatorsMap[value]) {
      setRes(eval(stringValue + value).toString());
    }
  };
  const handleDelete = (dig) => {
    try {
      if (!stringValue) {
        return;
      }
      //remove last char
      const val = stringValue.slice(0, -1);
      setCalculate(val);
      if (!operatorsMap[val.charAt(val.length - 1)]) {
        setRes(eval(val).toString());
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleEqual = () => {
    setCalculate(eval(stringValue).toString());
  };
  return (
    <div className="mainCalc">
      <div className="calculator">
        <div className="display">
          {res ? <span>({res})</span> : ""}

          {stringValue ? stringValue : 0}
        </div>
        <div className="operators">
          {operators.map((operator, index) => {
            return (
              <button
                onClick={() => {
                  handleCalc(operator);
                }}
                key={index}
              >
                {operator}
              </button>
            );
          })}
          <button onClick={handleDelete}>DEL</button>
        </div>
        <div className="digits">
          {digits.map((dig, index) => {
            return (
              <button onClick={() => handleCalc(dig)} key={index}>
                {dig}
              </button>
            );
          })}
          <button>.</button>
          <button onClick={handleEqual}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
