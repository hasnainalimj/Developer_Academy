import React from "react";

//Methods
import { logout, getAllMeetings } from "../../config/firebase";


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: true,
      meetings: []
    }
  }

  componentWillMount() {
    this.checkLoginStatus()
  }

  componentDidMount() {
    this.fetchMeetings()
  }

  fetchMeetings = async () => {
    const userId = localStorage.getItem("userId")
    const temp = [];

    try {
      const response = await getAllMeetings(userId)
      if (response.size) {
        response.forEach(doc => {
          temp.push({ ...doc.data(), docId: doc.id })
        })
        this.setState({
          meetings: temp,
          loader: false
        })
      } else {
        this.setState({
          loader: false,
          meetings: temp
        })
      }
    } catch (error) {
      this.setState({
        loader: false,
        meetings: []
      })
      console.log("TCL: Home -> componentDidMount -> error", error)
    }
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
    const { loader, meetings } = this.state;
    const { history } = this.props
    return (
      <div>
        <button onClick={this.handleLogout}>Logout</button>

        <React.Fragment>
          {loader ?
            <p>Loading</p>
            :
            <React.Fragment>
              {!meetings.length ?
                <p>You don't have any meeting yet!</p>
                :
                <React.Fragment>
                  {meetings.map((val, ind) => {
                    return <p>{ind}</p>
                  })}
                </React.Fragment>
              }
            </React.Fragment>
          }
        </React.Fragment>
        <button onClick={() => history.push("/meeting")}>Set a meeting</button>
      </div>
    );
  }
}

export default Home
