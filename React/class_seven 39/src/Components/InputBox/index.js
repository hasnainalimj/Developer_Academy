import React from "react";
import "./style.css";

//Dump Components
export default class InputBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBox: ""
    };
  }

  render() {
    const { handler, searchBox } = this.props;
    return <input type="text" value={searchBox} onChange={handler} />;
  }
}
