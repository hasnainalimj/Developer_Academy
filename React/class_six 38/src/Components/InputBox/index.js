import React from "react";

export default class InputBox extends React.Component {
  render() {
    const { children, heading } = this.props;
    return (
      <form>
        <input type="text" placeholder="Search...." />
        {children}
        {heading}
      </form>
    );
  }
}
