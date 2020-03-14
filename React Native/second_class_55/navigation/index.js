import { createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation"

//Screens
import Home from "../screens/Home"
import About from "../screens/About"
import loginScreen from "./loginScreen"

const AuthStack = createStackNavigator({
    Login: loginScreen
})

const AppStack = createStackNavigator({
    Home,
    About
}, {
    initialRouteName: "Home"
})

const navigations = createSwitchNavigator({
    AuthStack,
    AppStack
})

const bottomBar = createBottomTabNavigator({
    HomeTab : Home,
    AboutTab : About,
    LoginTab : loginScreen
})

export default createAppContainer(bottomBar)
