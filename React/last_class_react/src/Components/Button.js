import React from "react"
// import PropTypes from 'prop-types';

export default function Button({event = () => {} , text = ""}){

    return (
        <button onClick={event}>{text}</button>
    )
}

// Button.propTypes = {
//     event : PropTypes.func,
//     text : PropTypes.string.isRequired,

// list: PropTypes.arrayOf(
//     PropTypes.shape({
//     objectID: PropTypes.string.isRequired,
//     author: PropTypes.string,
//     url: PropTypes.string,
//     num_comments: PropTypes.number,
//     points: PropTypes.number,
//     })
//     ).isRequired
// }

// PropTypes.array
// • PropTypes.bool
// • PropTypes.func
// • PropTypes.number
// • PropTypes.object
// • PropTypes.string