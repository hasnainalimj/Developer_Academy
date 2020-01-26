import React from "react";
import "./styles.css";

export default function Button(props) {
    const {
        color = "white",
        backgroundColor = "green",
        text = "default",
        method
    } = props;
    return (
        <button className="button" style={{ color, backgroundColor }} onClick={method}>
            {text}
        </button>
    );
}
