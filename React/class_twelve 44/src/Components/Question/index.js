import React from "react";
import "./styles.css";

export default function Button(props) {
    const { question, index } = props;
    return <div className="questionWrapper">
        <p className="question">Q{index + 1} : {question}</p>
    </div>
}
