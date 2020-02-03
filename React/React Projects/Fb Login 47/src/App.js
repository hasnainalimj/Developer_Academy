import React from "react";
import "./App.css";

//Methods
import { fbLogin, getUser, setUser } from "./config/firebase"

class App extends React.Component {


  handleSubmit = async () => {
    try {
      const response = await fbLogin();
      const user = await getUser(response.user.uid)
      const { uid, displayName } = response.user;
      if (user.data()) {
        console.log("already registerd")
      } else {
        console.log("please add into db")
        await setUser(uid, { displayName, uid })
      }
    } catch (error) {
      console.log("TCL: App -> handleSubmit -> error", error)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Login with Facebook</button>
      </div>
    );
  }
}

export default App;
