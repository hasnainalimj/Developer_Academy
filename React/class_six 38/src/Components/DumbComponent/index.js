import React from "react";

//Dump Components
export default function DumpComponent(props) {
  const callMe = () => {
    alert("Call Me");
  };

  const { heading } = props;
  return <h1 onClick={callMe}>{heading}</h1>;
}
