import React from "react";

//Methods
import { logout } from "../../config/firebase";

class Home extends React.Component {

  componentWillMount() {
    this.checkLoginStatus()
  }

  checkLoginStatus = () => {
    const { history } = this.props;
    const userId = localStorage.getItem("userId");
    if (!userId) {
      history.replace("/signup")
    }
  }

  handleLogout = async () => {
    const { history } = this.props;
    try {
      await logout();
      localStorage.removeItem("userId");
      history.replace("/signup")
    } catch (error) {
      console.log("TCL: Home -> handleLogout -> error", error)
    }
  }

  render() {
    return (
      <div>
        Home
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Home
