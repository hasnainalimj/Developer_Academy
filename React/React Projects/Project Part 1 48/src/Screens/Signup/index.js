import React from "react";

//Methods
import { fbLogin, getUser, setUser } from "../../config/firebase"

class Signup extends React.Component {
  handleSubmit = async () => {
    const { history } = this.props;
    try {
      const response = await fbLogin();
      const { uid, displayName } = response.user;
      localStorage.setItem("userId" , uid);
      const user = await getUser(uid)
      if (user.data()) {
        history.replace('/')
      } else {
        await setUser(uid, { displayName, uid })
        history.replace("/profile")
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

export default Signup;
