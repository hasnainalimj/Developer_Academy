import React from "react";
import "./App.css";

var key = "Email";

var obj = {
  [key]: "mjhasnain15@gmail.com"
};

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userService: {
        getUserName(user) {
          return user.firstname + " " + user.lastname;
        }
      },
      list: ["Pepsi", "Dew", "Marinda", "Food Panda", "Pizza Max"],
      user: [
        {
          name: "Ali",
          email: "ali@gmail.com"
        }
      ],

      data: [
        { id: 1, name: "Ali" },
        { id: 2, name: "Saad" },
        { id: 3, name: "Sami" },
        { id: 1, name: "Ali" }
      ],
      textInput: ""
    };

    // this.showMeValue = this.showMeValue.bind("this");
  }

  showMeValue(value){
    console.log("TCL: App -> showMeValue -> value", value)
    console.log(this)
  }

  // showMeValue = (value, index) => {
  //   console.log(value + index);
  // };

  deleteItem = ind => {
    let items = this.state.list;
    items.splice(ind, 1);
    this.setState({ list: items });
  };

  render() {
    return (
      <div>
        {this.state.list.map((val, index) => {
          // return <h1 key={index} onClick={this.showMeValue.bind(this , val)}>{val}</h1>;
          return <h1 key={index} onClick={this.showMeValue}>{val}</h1>;
          // return (
          //   <h1 key={index} onClick={() => this.showMeValue(val, index)}>
          //     {val}
          //   </h1>
          // );
        })}

        {/* <h1>{this.state.user[0].name}</h1>
        <h1>{this.state.user[0].email}</h1> */}

        {/* {this.state.data.map(val => {
          if (val.id != 1) {
            return <h1>{val.name}</h1>
          }
        })} */}

        {/* {this.state.list.map((val, ind) => {
          return <h3 onClick={() => this.deleteItem(ind)}>{val}</h3>;
        })} */}
        <input
          type="text"
          value={this.state.textInput}
          onChange={e => this.setState({ textInput : e.currentTarget.value})}
          // onChange={e => console.log(e.currentTarget.value)}

        />
        <h1>{this.state.textInput}</h1>
      </div>
    );
  }
}
