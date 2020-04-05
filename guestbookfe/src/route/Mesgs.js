import React, { useState } from "react";
import { Input, Button } from 'antd';
import Register from "./Register";
import {Redirect} from 'react-router-dom';
import queryString from 'query-string';

const axios = require('axios').default;


export default class Mesgs extends React.Component {

    
    getMsgs(){
        let url = this.props.location.search;
        let params = queryString.parse(url);
        console.log(params);
        return ""+params.uname
    }

    render() {
        return (
            <div>
                <textarea  value={this.getMsgs()} />
            </div>
    );
    }
}