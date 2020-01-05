import React from "react";

export default class Footer extends React.Component {
  render() {
    const { title, color } = this.props;
    return <h1 style={{ color: color }}>{title}</h1>
  }
}
