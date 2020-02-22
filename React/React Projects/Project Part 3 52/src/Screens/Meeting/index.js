import React from "react";
import "./styles.css";
import { Card, CardWrapper } from "react-swipeable-cards";
import swal from "sweetalert"

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
    const { beverages: myBeverages, meetings } = this.state.myData;
    try {
      let temp = [];
      const response = await getUsers();
      if (response.size) {
        response.forEach(doc => {
          let foundBeverages = false;
          let foundMeeting = false;
          if (myData.uid !== doc.data().user_id) {
            const { beverages, meetingTimings } = doc.data();
            if (myBeverages.length > beverages.length) {
              for (let i = 0; i < myBeverages.length; i++) {
                if (beverages.includes(myBeverages[i])) {
                  foundBeverages = true;
                  break;
                }
              }
            } else {
              for (let i = 0; i < beverages.length; i++) {
                if (myBeverages.includes(beverages[i])) {
                  foundBeverages = true;
                  break;
                }
              }
            }

            if (foundBeverages) {
              temp.push({ ...doc.data(), docId: doc.id });
            }
          }
        });
        this.setState({ allUsers: temp, loader: false }, () =>
          this.calculateDistance()
        );
      } else {
        this.setState({ allUsers: temp, loader: false });
      }
    } catch (error) {
      this.setState({ allUsers: [], loader: false });
      console.log("TCL: Meeting -> getAllUsers -> error", error);
    }
  };

  getMyData = async () => {
    try {
      this.setState({ loader : true})
      const userId = localStorage.getItem("userId");
      const doc = await getUser(userId);
      localStorage.setItem("loginUserData" ,JSON.stringify(doc.data()))
      this.setState(
        {
          myData: doc.data()
        },
        () => {
          this.getAllUsers();
          this.calculateDistance();
        }
      );
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

  calculateDistance = (unit = "K") => {
    let temp = [];
    const { allUsers } = this.state;
    const {
      coords: { latitude: lat1, longitude: lon1 }
    } = this.state.myData;

    if (allUsers.length) {
      allUsers.map((val, ind) => {
        const { latitude: lat2, longitude: lon2 } = val.coords;

        if (lat1 == lat2 && lon1 == lon2) {
          return 0;
        } else {
          var radlat1 = (Math.PI * lat1) / 180;
          var radlat2 = (Math.PI * lat2) / 180;
          var theta = lon1 - lon2;
          var radtheta = (Math.PI * theta) / 180;
          var dist =
            Math.sin(radlat1) * Math.sin(radlat2) +
            Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
          if (dist > 1) {
            dist = 1;
          }
          dist = Math.acos(dist);
          dist = (dist * 180) / Math.PI;
          dist = dist * 60 * 1.1515;
          if (unit == "K") {
            dist = dist * 1.609344;
          }
          if (unit == "N") {
            dist = dist * 0.8684;
          }
          // return dist;
          if (dist <= 13) {
            temp.push(val);
          }
        }
      });
    }
  };

  onLeft = (ind) => {
    alert(ind)
  }

  onRight = ind => {
    const { allUsers } = this.state
    swal({
      title: "Are you sure?",
      text: `You want to meet ${allUsers[ind].nickname}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.doneMeeting(ind)
      }else {
        this.getMyData()
      }
    });
  }

  doneMeeting = ind => {
    const { history } = this.props;
    const { allUsers } = this.state;
    localStorage.setItem("selectedUserId" , allUsers[ind].uid)
    history.push("/selectLocation")
  }

  render() {
    const { allUsers, loader } = this.state;
    return (
      <div>
        <div className="meetingParent">
          {loader ? (
            <React.Fragment>
              <p>Loading....</p>
            </React.Fragment>
          ) : (
              <React.Fragment>
                {!allUsers.length ? (
                  <p>No Matched Users....</p>
                ) : (
                    <CardWrapper>
                      {allUsers.map((val, ind) => {
                        return (
                          <Card
                            onSwipeLeft={() => this.onLeft(ind)}
                            onSwipeRight={() => this.onRight(ind)}
                          >
                            <div className="nestedCards">
                              <h3>{val.nickname}</h3>
                            </div>
                          </Card>
                        );
                      })}
                    </CardWrapper>
                  )}
              </React.Fragment>
            )}
        </div>
      </div>
    );
  }
}

export default Meeting;
