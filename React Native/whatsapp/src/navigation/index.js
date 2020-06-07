import React from "react";
import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
} from "react-navigation";

//Screens
import introScreen from './introScreen'

const IntroStack = createStackNavigator({
    Intro: introScreen
}, {
    initialRouteName: 'Intro'
})

//Login = Main
//Home = Main


// Login ===> Home

// Login = Auth
// Home = Main