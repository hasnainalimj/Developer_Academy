import React from "react";
import "./style.css";

//Dump Components
export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["a", "b", "c", "d"]
    };
  }

  render() {
    const { list } = this.state;
    const { color = "blue", getItem, num } = this.props;
    return (
      <ul>
        {list.map((val, index) => {
          return (
            <li style={{ color }} onClick={() => getItem(index)}>
              {val}
            </li>
          );
        })}
        <h1>{num}</h1>
      </ul>
    );
  }
}
