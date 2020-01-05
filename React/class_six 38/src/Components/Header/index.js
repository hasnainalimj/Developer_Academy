import React from "react";

export default class Header extends React.Component {
  render() {
    const { title, color = "red" } = this.props;
    return (
      <div style={{ width: "100%", height: 50, backgroundColor: color }}>
        <h1>{title}</h1>
      </div>
    );
  }
}
