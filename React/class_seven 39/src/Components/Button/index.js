import React from "react";
import "./style.css";

//Dump Components
export default function Button(props) {
  const { buttonName, clickMethod } = props;
  return (
    <button className="wrapper" onClick={clickMethod}>
      {buttonName}
    </button>
  );
}
