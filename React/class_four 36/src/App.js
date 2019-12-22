import React from "react";
import "./App.css";

// const datass = {
//   name: "Abc",
//   email: "abc@gmail.com"
// };

// const datasss = {
//   name: "Abc",
//   email: "abc@gmail.com"
// };

// const { name, email } = datass;
// const { name: dummy, email } = datasss;

// var j = [1, 2, 3, 4];

// let [a, b, c, d] = j;

// var k = { name: { key: 1 } };

// const {
//   name: { key }
// } = k;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "Hello",
      list: [],
      listName: ""
    };

    this.age = 20;
    // this.getData = this.getData.bind(this);
    // console.log(this);
  }

  // getData() {
  //   console.log("this", this);
  // }

  getData = val => {
    // console.log("TCL: App -> getData -> val", val);
    // console.log(this);
    this.setState({
      text: "Bye"
    });
  };

  addListItem = () => {
    // const { list , listName }= this.state;
    const list = this.state.list;
    console.log("TCL: App -> addListItem -> list", list);
    list.push(this.state.listName);
    console.log("TCL: App -> addListItem -> list", list);
    this.setState({
      list,
      listName: ""
    });

    // this.setState({text : "Salam"} , () => {
    //   alert("Done")
    // })
  };

  // parent = () => {
  //   return child = () => {
  //     console.log("ES5")
  //   }
  // }

  // parent = val => item => console.log(val , "/" , item);

  render() {
    // this.parent("bye")("hello");
    const { listName, list } = this.state;
    return (
      <div>
        {/* <h1 onClick={this.getData.bind(this)}>Click Me</h1> */}
        {/* <h1 onClick={() => this.getData("Hi")}>Click Me</h1> */}

        {/* <h1>{this.state.text}</h1> */}
        {/* <input
          type="text"
          value={this.state.listName}
          onChange={e => this.setState({ listName: e.currentTarget.value })}
        />
        <button onClick={this.addListItem}>Add</button>
        <ul>
          {this.state.list.map(val => {
            return <li>{val}</li>;
          })}
        </ul> */}

        {/* <input
          type="text"
           
          onChange={e => this.setState({ listName: e.currentTarget.value })}
        />
        <button onClick={this.addListItem}>Add</button>
        <ul>
          {list.map(val => {
            return <li>{val}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}
