import React from "react";
import logo from "./logo.svg";
import "./App.css";

const text = "This is your first class";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text">React Class 1</h1>
        <h1>{text}</h1>
      </div>
    );
  }
}

export default App;
