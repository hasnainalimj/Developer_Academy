import React, { Component } from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          title: "React",
          year: 2019
        },
        {
          title: "Redux",
          year: 2020
        }
      ],
      caller: function() {
        console.log("hi");
      },
      data : [["A","B","C"], ["C","D","E"]]
    };

    console.log("this", this);
  }

  render() {
    return (
      <div>
        {/* {this.state.list.map((val, ind) => {
          return (
            <div key={ind}>
              <h1>{val.title}</h1>
              <h1>{val.year}</h1>
            </div>
          );
        })} */}
        {this.state.data.map(value => {
        return value.map(val => {
        return <h1>{val}</h1>
        })
        })}
      </div>
    );
  }
}
