import React, { Component } from "react"

//Container
import Intro from '../containers/Intro'

class introScreen extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    render() {
        return <Intro />;
    }
}

export default introScreen