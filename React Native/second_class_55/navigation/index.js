import { createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from "react-navigation"

//Screens
import Home from "../screens/Home"
import About from "../screens/About"
import loginScreen from "./loginScreen"

const AuthStack = createStackNavigator({
    Login: loginScreen
})

const DrawerStack = createDrawerNavigator({
    Home,
    About
})

const AppStack = createStackNavigator({
    DrawerStack,
    Home,
    About
})

const navigations = createSwitchNavigator({
    AuthStack,
    AppStack
})

const bottomBar = createBottomTabNavigator({
    HomeTab: Home,
    AboutTab: About,
    LoginTab: loginScreen
})

export default createAppContainer(navigations)
