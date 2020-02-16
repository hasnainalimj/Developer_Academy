import React from "react";
import Swing from "react-swing";
import "./styles.css";
import { Direction } from "swing";

//Methods
import { getUsers, getUser } from "../../config/firebase";

class Meeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: true,
      allUsers: [],
      myData: {}
    };
  }

  componentWillMount() {
    this.checkLoginStatus();
  }

  componentDidMount() {
    this.getMyData();
  }

  getAllUsers = async () => {
    const { myData } = this.state;
    const { beverages: myBeverages, meetings } = this.state.myData
    try {
      let temp = []
      const response = await getUsers()
      if (response.size) {
        response.forEach(doc => {
          let foundBeverages = false
          let foundMeeting = false
          if (myData.uid !== doc.data().user_id) {
            const { beverages, meetingTimings } = doc.data()
            if (myBeverages.length > beverages.length) {
              for (let i = 0; i < myBeverages.length; i++) {
                if (beverages.includes(myBeverages[i])) {
                  foundBeverages = true
                  break;
                }
              }
            } else {
              for (let i = 0; i < beverages.length; i++) {
                if (myBeverages.includes(beverages[i])) {
                  foundBeverages = true
                  break;
                }
              }
            }

            if(foundBeverages){
              temp.push({...doc.data() , docId : doc.id})
            }
          }
        });
      } else {
        console.log("not found");
      }
    } catch (error) {
      console.log("TCL: Meeting -> getAllUsers -> error", error);
    }
  };

  getMyData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const doc = await getUser(userId);
      this.setState({
        myData: doc.data()
      }, () => this.getAllUsers())
    } catch (error) {
      console.log("TCL: Meeting -> error", error);
    }
  };

  checkLoginStatus = () => {
    const { history } = this.props;
    const userId = localStorage.getItem("userId");
    if (!userId) {
      history.replace("/signup");
    }
  };

  render() {
    const { history } = this.props;
    return (
      <div>
        <div className="meetingParent">
          <Swing
            config={{
              allowedDirections: [Direction.LEFT, Direction.RIGHT]
            }}
            className="stack"
            tagName="div"
            setStack={stack => this.setState({ stack: stack })}
            ref="stack"
            throwout={e => console.log("throwout", e)}
          >
            <div className="card" ref="card1">
              <div className="cards"></div>
            </div>
          </Swing>
        </div>
      </div>
    );
  }
}

export default Meeting;
