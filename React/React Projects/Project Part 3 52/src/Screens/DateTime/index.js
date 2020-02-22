import React from "react";

class DateTime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: true,
      meetings: []
    }
  }

  render() {
    return (
      <div>
        set date time
      </div>
    );
  }
}

export default DateTime
