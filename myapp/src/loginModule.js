import React from 'react';
import './App.css';

class loginModule extends React.Component {
    state = {
        user: "Surekha",
        pass: "12345678"
    };
    handleSubmit = (e) => {
        e.preventDefault();        
        const userName = document.getElementById("username").value;
        const password = document.getElementById("password").value;        
        if (userName && password) {
            if (userName == this.state.user && password == this.state.pass) {
                document.getElementById("message").innerHTML="Login Successful!";                
            }
            else {
                document.getElementById("message").innerHTML="Login Failed";                
            }
        }
        else {
            if(userName=="" && password==""){
                document.getElementById("message").innerHTML="Enter Username and Password";               
            }
            else if(userName==""){
                document.getElementById("message").innerHTML="Enter Username";                
            }
            else if(password==""){
                document.getElementById("message").innerHTML="Enter Password";                
            }            
        }

    };

    render() {
        return (                 
            <div className="Login">
                <p id="message"></p>   
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username : </label>
                        <input type="text" id="username" />
                    </div>
                    <div>
                        <label>Password : </label>
                        <input type="text" id="password" />
                    </div>

                    <button>Submit</button>
                </form>
            </div>
          );
    }
}

export default loginModule;





