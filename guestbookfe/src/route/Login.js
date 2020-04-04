import React, { useState } from "react";
import { Input, Button } from 'antd';
import Register from "./Register";


const axios = require('axios').default;
//const [isAuthenticated, userHasAuthenticated] = useState(false);

export default class Login extends React.Component {
     state = {
        username: '',
        password: '',
        email: '',
        sessionId: '',
    }

    onchange = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
            })
    }

    onSubmit = () => {
        console.log(this.state)
        axios.post('http://localhost:8881/user/login',{
            username: this.state.username,
            password: this.state.password,
        }).then((res) => {
            console.log(res);
            if(res.data.authtoken){
               window.localStorage.setItem('cachauthtoken', res.data.authtoken)
                console.log(window.localStorage.getItem('cachauthtoken'))
            }
        }).catch(function(err){
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Input name='username' type='text' placeholder='UserName' onChange={e => this.onchange(e)} value={this.state.username} />
                <Input name='password' type='password' placeholder='Password' onChange={e => this.onchange(e)} value={this.state.password}/>
                <Button onClick={() => this.onSubmit()} type='primary'>Login</Button>
            </div>
    );
    }
}