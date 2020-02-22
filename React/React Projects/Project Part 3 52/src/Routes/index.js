import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";


//Screens
import Signup from "../Screens/Signup"
import Home from "../Screens/Home"
import Profile from "../Screens/Profile"
import Location from "../Screens/Location"
import Meeting from "../Screens/Meeting"
import SetLocation from "../Screens/SetLocation"
import DateTime from "../Screens/DateTime"
import Direction from "../Screens/Direction"

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
                    <Route exact path="/selectLocation" component={SetLocation} />
                    <Route exact path="/setTiming" component={DateTime} />
                    <Route exact path="/direction" component={Direction} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    )
}