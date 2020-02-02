import React from "react";
import "./styles.css";
import { messages } from "../../Utils/rawData";

export default class ChatBot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages,
      chat: [],
      msg: ""
    };
  }

  sendMessage = () => {
    const { msg, messages, chat } = this.state;

    if (!msg) {
      alert("Enter Message!");
      return;
    }

    let temp = [...chat];

    for (let i = 0; i < messages.length; i++) {
      for (let j = 0; j < messages[i].question.length; j++) {
        if (msg.toLowerCase() === messages[i].question[j].toLowerCase()) {
          let index = Math.floor(Math.random() * messages[i].answers.length);
          temp.push(
            { user: "Me", msg },
            { user: "Cortana", msg: messages[i].answers[index] }
          );
        }
      }
    }

    this.setState({
      chat: temp,
      msg: ""
    });
  };

  render() {
    const { msg, chat } = this.state;
    return (
      <div className="parent">
        <div className="wrapper">
          <div className="chatBox">
            {chat.map(val => {
              return (
                <p className="messageText">{`${val.user} : ${val.msg}`}</p>
              );
            })}
          </div>
          <div className="inputWrapper">
            <input
              type="text"
              placeholder="Enter message!"
              className="inputBox"
              value={msg}
              onChange={e => this.setState({ msg: e.currentTarget.value })}
            />
            <button className="btnSend" onClick={this.sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}
