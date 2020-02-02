import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Screens
import Login from "../Screens/Login"
import Signup from "../Screens/Signup"
import Home from "../Screens/Home"

const Router = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route exact component={Home} path="/" />
                    <Route exact component={Login} path="/login" />
                    <Route exact component={Signup} path="/signup" />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    )
}

export default Router;
