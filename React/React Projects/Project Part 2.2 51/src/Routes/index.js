import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";


//Screens
import Signup from "../Screens/Signup"
import Home from "../Screens/Home"
import Profile from "../Screens/Profile"
import Location from "../Screens/Location"
import Meeting from "../Screens/Meeting"

export default function Routes() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/location" component={Location} />
                    <Route exact path="/meeting" component={Meeting} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    )
}