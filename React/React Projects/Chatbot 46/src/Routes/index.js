import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Screens
import ChatBot from "../Screens/ChatBot"

const Router = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route exact component={ChatBot} path="/" />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    )
}

export default Router;
