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

  handleLangChange = val => {
    this.props.getItem(val);
  };

  render() {
    const { list } = this.state;
    const { getItem } = this.props;
    return (
      <ul>
        {list.map(val => {
          return <li onClick={() => this.handleLangChange(val)}>{val}</li>;
        })}
      </ul>
    );
  }
}
