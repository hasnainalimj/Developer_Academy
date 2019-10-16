import React from "react";
import "./App.css";

//Components
import List from "./Components/List";

//Config
import { BASE_URL } from "./config/credentials";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      list: []
    };
  }

  componentDidMount() {
    // this.getData()
    this.getWithAsync();
  }

  getData = () => {
    fetch(`${BASE_URL}todos`)
      .then(response => response.json())
      .then(json => {
        fetch(`${BASE_URL}todos`)
          .then(r => {
            return r.json();
          })
          .then(async d => {
            const data = await fetch(`${BASE_URL}todos`);
            const result = await data.json();
          });
      });
  };

  //Async Await
  getWithAsync = async () => {
    const data = await fetch(`${BASE_URL}todos`);
    const result = await data.json();
    this.setState({
      list: result
    });
    console.log("TCL: App -> getWithAsync -> result", result);
  };

  async simple() {}

  getItem = val => {
    this.setState({
      num: val
    });
  };

  render() {
    const { num, list } = this.state;

    if (!list) return null

    return (
      <div>
        {/* <List color="red" getItem={this.getItem} num={num}/>
        <h1>{num}</h1> */}
        {list.map(val => {
          return <p>{val.title}</p>;
        })}
      </div>
    );
  }
}
