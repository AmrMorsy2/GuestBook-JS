import React from "react";
import { Input, Button } from 'antd';
const axios = require('axios').default;

export default class Register extends React.Component {
     state = {
        username: '',
        password: '',
        email: '',
    }

    onchange = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
            })
    }

    onSubmit = () => {
        console.log(this.state)
        axios.post('http://localhost:8881/user/register',{
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }).then(function(res){
            console.log(res);
        }).catch(function(err){
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Input name='username' type='text' placeholder='UserName' onChange={e => this.onchange(e)} value={this.state.username} />
                <Input name='password' type='password' placeholder='Password' onChange={e => this.onchange(e)} value={this.state.password}/>
                <Input name='email' type='email' placeholder='Email' onChange={e => this.onchange(e)} value={this.state.email}/>
                <Button onClick={() => this.onSubmit()} type='primary'>Register</Button>
            </div>
    );
    }
}
