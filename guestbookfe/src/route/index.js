import React from "react";
import 'antd/dist/antd.css';

import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";

import Login from './Login'
import Register from './Register'
import Mesgs from './Mesgs'

export default () => (
        <BrowserRouter>
            <Switch>
            <Route exact path="/login" render={ props => <Login {...props} />} />
            <Route exact path="/register" render={ props => <Register {...props} />} />
            <Route exact path="/profilemsg" render={ props => <Mesgs {...props} />} />
            </Switch>
        </BrowserRouter>
    );