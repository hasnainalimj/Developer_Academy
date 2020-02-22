import React from "react";

//Methods
import { fbLogin, getUser, setUser } from "../../config/firebase";

class Signup extends React.Component {
  handleSubmit = async () => {
    const { history } = this.props;
    try {
      const response = await fbLogin();
      const { uid, displayName } = response.user;
      localStorage.setItem("userId", uid);
      const user = await getUser(uid);
      if (user.data()) {
        this.checkStage(user.data())
      } else {
        await setUser(uid, { displayName, uid });
        localStorage.setItem("stage", "basic");
        history.replace("/profile");
      }
    } catch (error) {
      console.log("TCL: App -> handleSubmit -> error", error);
    }
  };

  checkStage = data => {
    const { history } = this.props;
    if (data.registerd) {
      history.replace("/");
    } else {
      if (!data.nickname || !data.phone) {
        localStorage.setItem("stage", "basic");
        history.replace("/profile");
      } else if (!data.profileImages) {
        localStorage.setItem("stage", "images");
        history.replace("/profile");
      } else if (!data.beverages || !data.meetings) {
        localStorage.setItem("stage", "beverages");
        history.replace("/profile");
      } else if (!data.coords) {
        history.replace("/location");
      }
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
