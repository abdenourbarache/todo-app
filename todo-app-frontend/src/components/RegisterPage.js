import React from "react"; 
import {connect} from "react-redux";

import RegisterForm from "./RegisterForm";
import {startRegister} from "./../actions/auth";
import {getTodos} from "./../actions/todos";


class RegisterPage extends React.Component{

    onSubmit = ({email, password}) => {
        this.props.startRegister({
            email,
            password
        },() => {
            this.props.getTodos([]);
            this.props.history.push("/dashboard");
        })        
    }
    render(){
        return (
            <div>
                <h3>Please insert your email and password  register</h3>
                <RegisterForm onSubmit={this.onSubmit}/>
                {
                    this.props.error && 
                    this.props.error.type === 'registrationError' &&
                    <p>{this.props.error.message}</p>
                }
            </div>
        )
    }   
}

const mapDispatchToProps = (dispatch) => ({
    startRegister: (user,callback) => dispatch(startRegister(user,callback)),
    getTodos : (todos) => dispatch(getTodos(todos))
});

const mapStateToProps = (state) => ({
    error : state.auth.error,
    
})

export default connect(mapStateToProps,mapDispatchToProps)(RegisterPage);