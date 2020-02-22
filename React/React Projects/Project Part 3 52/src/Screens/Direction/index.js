import React from "react";
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer, withScriptjs } from "react-google-maps";

class Direction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: true,
      meetings: []
    }
  }

  componentDidMount(){
    this.getDirections()
  }

  getDirections = () => {
    const { coords } = JSON.parse(localStorage.getItem("loginUserData"))
    console.log("TCL: Direction -> getDirections -> coords", coords)
    const { location : designation } = JSON.parse(localStorage.getItem("meetingLocation"))
    console.log("TCL: Direction -> getDirections -> designation", designation)
    // const DirectionsService = new google.maps.DirectionsService();
    console.log(window.google)

		// DirectionsService.route({
		// 	origin: new google.maps.LatLng(coords.latitude, coords.longitude),
		// 	destination: new google.maps.LatLng(designation.meetingLocationCoords.latitude, designation.meetingLocationCoords.longitude),
		// 	travelMode: google.maps.TravelMode.DRIVING,
		// }, (result, status) => {
		// 	if (status === google.maps.DirectionsStatus.OK) {
		// 		this.setState({
		// 			directions: result,
		// 		});
		// 	} else {
		// 		alert("Sorry! Can't calculate directions!")
		// 	}
		// });
	}

  render() {
    return (
      <div>
        direction
      </div>
    );
  }
}

export default Direction
