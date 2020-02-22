import React from "react";
import "./styles.css";
//Constants
import { BASE_URL } from "../../config/credentials";

class SetLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: true,
      locations: [],
      searchText: ""
    };
  }

  componentDidMount() {
    this.getNearestDefaultLocations();
  }

  getNearestDefaultLocations = async () => {
    try {
      const {
        coords: { latitude, longitude }
      } = JSON.parse(localStorage.getItem("loginUserData"));
      const nearestApi = `${BASE_URL}limit=3&ll=${latitude},${longitude}`;
      const rawJson = await fetch(nearestApi);
      const result = await rawJson.json();
      const {
        response: { venues }
      } = result;
      this.setState({
        locations: venues.length ? venues : [],
        loader: false
      });
    } catch (error) {
      console.log(
        "TCL: SetLocation -> getNearestDefaultLocations -> error",
        error
      );
      this.setState({
        locations: [],
        loader: false
      });
    }
  };

  searchLocation = async () => {
    const { searchText } = this.state;

    if (!searchText) {
      alert("Enter location name");
      return;
    }
    const {
      coords: { latitude, longitude }
    } = JSON.parse(localStorage.getItem("loginUserData"));
    try {
      this.setState({ loader: true });
      const searchApi = `${BASE_URL}ll=${latitude},${longitude}&query=${searchText}`;
      const rawJson = await fetch(searchApi);
      const result = await rawJson.json();
      const {
        response: { venues }
      } = result;
      this.setState({
        locations: venues.length ? venues : [],
        loader: false
      });
    } catch (error) {
      console.log("TCL: SetLocation -> searchLocation -> error", error);
      this.setState({
        locations: [],
        loader: false
      });
    }
  };

  next = val => {
    const { history } = this.props
    localStorage.setItem("meetingLocation", JSON.stringify(val))
    history.push("/setTiming")
  }

  direction = val => {
    const { history } = this.props
    localStorage.setItem("meetingLocation", JSON.stringify(val))
    history.push("/direction")
  }

  render() {
    const { locations, loader, searchText } = this.state;
    return (
      <div>
        <div className="searchWrapper">
          <input
            type="text"
            value={searchText}
            placeholder="Search Location"
            onChange={e => this.setState({ searchText: e.currentTarget.value })}
          />
          <button onClick={this.searchLocation}>Search</button>
        </div>
        {loader ? (
          <p>Loading.....</p>
        ) : (
            <React.Fragment>
              {!locations.length ? (
                <p>No Location Found</p>
              ) : (
                  locations.map((val, ind) => {
                    return (
                      <div className="wrapper">
                        <p>{val.name}</p>
                        <button onClick={() => this.next(val)}>Next</button>
                        <button onClick={() => this.direction(val)}>Direction</button>
                      </div>
                    );
                  })
                )}
            </React.Fragment>
          )}
      </div>
    );
  }
}

export default SetLocation;
