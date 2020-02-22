import React from "react";

//Methods
import { setUser, uploadImages } from "../../config/firebase";

//Constants
const userId = localStorage.getItem("userId");

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "",
      phone: "",
      stage: localStorage.getItem("stage"),
      imgOne: "",
      imgTwo: "",
      imgThree: "",
      beverages: [],
      meetings: []
    };
  }

  _handleState = (state, value) => {
    this.setState({
      [state]: value
    });
  };

  handleBasic = async () => {
    const { nickname, phone } = this.state;
    if (!nickname || !phone) {
      alert("All fields required!");
      return;
    }
    try {
      await setUser(userId, { nickname, phone });
      this.setState({ stage: "images" });
    } catch (error) {
      console.log("TCL: Profile -> handleBasic -> error", error);
    }
  };

  handleProfileImages = async () => {
    const { imgOne, imgTwo, imgThree } = this.state;

    if (!imgOne || !imgTwo || !imgThree) {
      alert("All fields required!");
      return;
    }

    try {
      let images = [imgOne, imgTwo, imgThree];
      const profileImages = await uploadImages(images);
      await setUser(userId, { profileImages });
      this.setState({ stage: "beverages" });
    } catch (error) {
      console.log("TCL: Profile -> handleProfileImages -> error", error);
    }
  };

  handleBeverages = async () => {
    const { beverages , meetings } = this.state;
    const { history } = this.props;
    try {
      setUser(userId , {beverages , meetings})
      history.replace("/location")
    } catch (error) {
      console.log("TCL: Profile -> handleBeverages -> error", error);
    }
  };

  _handleCheckboxes = (isSelected, state, value) => {
    let { beverages, meetings } = this.state;

    if(state === 'meetings'){
      if(isSelected){
        beverages.push(value)
        this.setState({beverages})
      }
    }else{
      if(isSelected){
        meetings.push(value)
        this.setState({meetings})
      }
    }
  };

  render() {
    const { stage, nickname, phone } = this.state;
    return (
      <div>
        {stage === "basic" && (
          <React.Fragment>
            <input
              placeholder="enter nickname"
              value={nickname}
              onChange={e =>
                this._handleState("nickname", e.currentTarget.value)
              }
            />
            <input
              placeholder="enter phone"
              value={phone}
              onChange={e => this._handleState("phone", e.currentTarget.value)}
            />
            <button onClick={this.handleBasic}>Next</button>
          </React.Fragment>
        )}

        {stage === "images" && (
          <React.Fragment>
            <input
              type="file"
              onChange={e =>
                this._handleState("imgOne", e.currentTarget.files[0])
              }
            />
            <input
              type="file"
              onChange={e =>
                this._handleState("imgTwo", e.currentTarget.files[0])
              }
            />
            <input
              type="file"
              onChange={e =>
                this._handleState("imgThree", e.currentTarget.files[0])
              }
            />
            <button onClick={this.handleProfileImages}>Next</button>
          </React.Fragment>
        )}

        {stage === "beverages" && (
          <React.Fragment>
            <label>
              30 mins
              <input
                type="checkbox"
                value="30mins"
                onChange={e =>
                  this._handleCheckboxes(
                    e.currentTarget.checked,
                    "beverages",
                    e.currentTarget.value
                  )
                }
              />
            </label>
            <label>
              60 mins
              <input
                type="checkbox"
                value="60mins"
                onChange={e =>
                  this._handleCheckboxes(
                    e.currentTarget.checked,
                    "beverages",
                    e.currentTarget.value
                  )
                }
              />
            </label>
            <label>
              120 mins
              <input
                type="checkbox"
                value="120mins"
                onChange={e =>
                  this._handleCheckboxes(
                    e.currentTarget.checked,
                    "beverages",
                    e.currentTarget.value
                  )
                }
              />
            </label>

            <label>
              pepsi
              <input
                type="checkbox"
                value="pepsi"
                onChange={e =>
                  this._handleCheckboxes(
                    e.currentTarget.checked,
                    "meetings",
                    e.currentTarget.value
                  )
                }
              />
            </label>
            <label>
              dew
              <input
                type="checkbox"
                value="dew"
                onChange={e =>
                  this._handleCheckboxes(
                    e.currentTarget.checked,
                    "meetings",
                    e.currentTarget.value
                  )
                }
              />
            </label>
            <label>
              tea
              <input
                type="checkbox"
                value="tea"
                onChange={e =>
                  this._handleCheckboxes(
                    e.currentTarget.checked,
                    "meetings",
                    e.currentTarget.value
                  )
                }
              />
            </label>
            <button onClick={this.handleBeverages}>Done</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Profile;
