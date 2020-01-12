import React from "react";
import "./style.css";

//Dump Components
export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text , handleInput } = this.props;
    return <div>
      <input type="text" value={text} placeholder="Email...." onChange={e => handleInput(e.currentTarget.value)}/>
    </div>;
  }
}
