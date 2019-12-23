import React from "react";

export default class InputBox extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <form>
        {children}
        <input type="text" placeholder="Search...." />
      </form>
    );
  }
}
