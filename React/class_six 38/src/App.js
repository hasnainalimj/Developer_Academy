import React from "react";
import "./App.css";

//Components
import InputBox from "./Components/InputBox";
import DumpComponent from "./Components/DumbComponent";
import Button from "./Components/Button";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <InputBox children="Email" heading={<h1>Tag</h1>} /> */}
        {/* <DumpComponent heading="Dump Component" /> */}
        <Button
          color="green"
          clickMethod={() => alert("Method Fired")}
          buttonName="Submit"
          styling={{ width: 200, height: 70, borderRadius: 10 }}
        />
      </div>
    );
  }
}
