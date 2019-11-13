import React, { Component } from 'react';
import './LoginModule.css';
import axios from 'axios';
import ErrorModule from '../ErrorModule/ErrorModule';

class LoginModule extends Component {
    state = {
        username: null,
        password: null,
        show: "none",
        message: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();

        if (this.isNumber(this.state.username) || this.isEmail(this.state.username) || this.isValidPassword(this.state.password)) {            
            if (this.isValidPassword(this.state.password)) {                
                axios({url :'https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login',                
                headers: {                    
                    "authorization":"Bearer YWRtaW46YWRtaW4=",                    
                    'content-type': 'application/json',                   
                },               
                data: {
                    'password': "Objectedge$10",
                    'username': "trupti.kashid@objectedge.com",                    
                },            
                method: "post"}
                )
                    .then(() => {
                        this.setState({
                            username: "",
                            password: "",
                            show: "flex",
                            message: "Login Successful!"
                        })
                        return;
                    });        
            }
            else {
                this.setState({
                    show: "flex",
                    message: "Invalid username or password !"
                })
                return;
            }

        }
        else {
            this.setState({
                show: "flex",
                message: "Invalid username or password !"
            })
            return;
        }

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    isNumber = (username) => {
        if (isNaN(username)) {
            return false;
        }
        else {
            return true;
        }
    }
    isEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email));
    }

    isUsername = (username) => {
        //Only Alphabets and Numbers
        var re = /^[0-9a-zA-Z-_-]+$/;
        return re.test(String(username))
    }
    isValidPassword = (password) => {
        // Alphabets, Numbers and special characters must
        var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9_!@#$%^&*]{7,15}$/;
        return re.test(String(password))
    }
    closeModule=()=>{        
        this.setState({
            show: "none"
        })
    }
    render() {
        return (
            <div className="container">
                <div className="login">
                    <div>
                        <label className="loginHeader">Log In</label><br />                        
                        <ErrorModule closeModule={this.closeModule} show={this.state.show} message={this.state.message} />
                        <form onSubmit={this.handleSubmit}>
                            <label>Username/Email/Phone</label><br />
                            <input type="text" id="username" onChange={this.handleChange} required value={this.state.username} /><br />
                            <label> Password</label><br />
                            <input type="password" id="password" onChange={this.handleChange} required value={this.state.password} /><br />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
                <div className="loginImage">test2</div>
            </div>
        )
    }
}

export default LoginModule;