import React from "react"; 
import {connect} from "react-redux";

import LoginForm from "./LoginForm";
import {startLogin} from "./../actions/auth";
import {startGetTodos} from "./../actions/todos";

class LoginPage extends React.Component{

    onSubmit = ({email, password}) => {
        this.props.startLogin({
            email,
            password
        }
         ,(token) => this.props.getTodos(token));        
    }
    render(){
        return (
            <div className="box-layout">
                  <div className="box-layout__box">
                    <h3 className="box-layout__title">Please insert your email and password to login</h3>
                    <LoginForm onSubmit={this.onSubmit}/>
                    {
                        this.props.error && 
                        this.props.error.type === 'authenticationError' &&
                        <p className="error-message">{this.props.error.message}</p>
                     }
                  </div>
            </div>
            
        )
    }   
}

const mapDispatchToProps = (dispatch) => ({
    startLogin : (user,callback) => dispatch(startLogin(user,callback)),
    getTodos : (token) => dispatch(startGetTodos(token)),
});

const mapStateToProps = (state) => ({
    error : state.auth.error,
    
})


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);