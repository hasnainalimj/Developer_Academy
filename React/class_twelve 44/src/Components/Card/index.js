import React from "react";
import "./styles.css";

//Components
import Question from "../Question"
import Button from "../Button";

export default function Card(props) {
    const { question, options, currentQuestion } = props;
    return <div className="cardWrapper">
        <Question question={question} index={currentQuestion} />
        <div className="optionsContainer">
            {options.map(value => {
                return <Button text={value} />
            })}
        </div>
    </div>
    }
