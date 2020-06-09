import React from 'react';
import validator from "validator";

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email :  '', 
            password : '',
            error : ''
        }
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        if(validator.isEmail(email)) this.setState(() => ({email}));
    }

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({password}));
    }

    onSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.email || !this.state.password )
         this.setState(() => ({error : 'Please fill all the fileds'}));
        else {
            this.setState(() => ({error : ''}));
            this.props.onSubmit({
                email : this.state.email,
                password : this.state.password
            });
        }  
    } 

    render(){
        return(
            <form onSubmit = {this.onSubmit} autoComplete="off">
                {!!this.state.error && <p>{this.state.error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    name="email" 
                    id ="email" 
                    onChange={this.onEmailChange} 
                    autoFocus/><br/><br/>
                <input 
                    type="password"
                    name="password" 
                    id="password" 
                    placeholder="Password" 
                    onChange={this.onPasswordChange}/>
                <input type="submit" value="Login"/>
            </form>
        )
    }
}