import React from "react";
import "./style.css";

import { styles } from "./app";

//Dump Components
export default function Button(props) {
  const { buttonName, clickMethod, color, styling } = props;
  return (
    <button
      className="wrapper"
      style={{ backgroundColor: color, ...styling, ...styles.fontStyling }}
      onClick={clickMethod}
      // style={styles.fontStyling}
    >
      {buttonName}
    </button>
  );
}
