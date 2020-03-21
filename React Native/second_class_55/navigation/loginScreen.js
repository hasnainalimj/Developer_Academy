import React from "react";

import Login from "../screens/Login"

export default class loginScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    render(){
        return <Login route={this.props.navigation.navigate} />
    }
}
