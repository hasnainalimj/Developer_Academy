import React from "react";
import "./App.css";

//Utils
// import {firstName , lastName } from "../src/Utils/helper"
// import * as institute from "../src/Utils/helper"
// import {firstName as newName } from "../src/Utils/helper"
// import data , {firstName , lastName } from "../src/Utils/helper"
let newInput;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 123,
      arr: [123, 123]
    };
  }

  componentDidMount() {
    const { num: numbers } = this.state
    // console.log(firstName , lastName)
    // console.log(institute.firstName)
    // console.log(newName)
    // console.log("App -> componentDidMount -> numbers", numbers)
    // this.input.focus()
    // console.log("newInput", newInput)
  }

  changeArray = () => {
    // let {arr} = this.state

    // arr.pop()

    // this.setState({arr})

    // this.setState((prevState, props) => {
    //   let { arr } = prevState;
    //   return { arr: arr.pop() };
    // });
  }

  render() {
    return (
      <div>
        <input type="text"
          ref={el => newInput = el}
        />
      </div>
    );
  }
}
