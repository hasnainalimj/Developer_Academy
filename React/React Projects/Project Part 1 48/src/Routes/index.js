import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";


//Screens
import Signup from "../Screens/Signup"
import Home from "../Screens/Home"
import Profile from "../Screens/Profile"

export default function Routes() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    )
}