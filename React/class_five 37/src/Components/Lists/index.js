import React from "react";

export default class Lists extends React.Component {
  render() {
    const { data = [], sayHi } = this.props;
    return (
      <ul>
        {data.map(val => {
          return <li onClick={() => sayHi(val)}>{val}</li>;
        })}
      </ul>
    );
  }
}
