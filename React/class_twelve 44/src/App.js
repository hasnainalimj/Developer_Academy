import React from "react";
import "./App.css";

//Utils
import { questions } from "./Utils/rawData";

//Components
import Button from "./Components/Button";
import Card from "./Components/Card";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions,
      currentQuestion: 0
    };
  }

  render() {
    let { questions, currentQuestion } = this.state;
    const { question, answers, correctAnswer } = questions[currentQuestion];
    return (
      <div className="wrapper">
        <Card
          question={question}
          options={answers}
          currentQuestion={currentQuestion}
        />
        {currentQuestion < questions.length - 1 && (
          <Button
            color="black"
            backgroundColor="grey"
            text="Next"
            method={() => this.setState({ currentQuestion: ++currentQuestion })}
          />
        )}
        {currentQuestion === questions.length - 1 && (
          <Button color="black" backgroundColor="grey" text="Submit" />
        )}
      </div>
    );
  }
}
