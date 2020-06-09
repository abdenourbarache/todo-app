import React from "react"; 
import {connect} from "react-redux";

import LoginForm from "./LoginForm";
import {startLogin} from "./../actions/auth";
import {startGetTodos} from "./../actions/todos";
import {fetchingData, dataFetched} from "./../actions/loading";

class LoginPage extends React.Component{

    onSubmit = ({email, password}) => {
        this.props.startLogin({
            email,
            password
        }
         ,(token) => {
                this.props.fetchingData();
                this.props.getTodos(token,() => {
                    this.props.history.push("/dashboard");
                    this.props.dataFetched();
             });
            }
        )        
    }
    render(){
        return (
            <div>
                <h3>Please insert your email and password to login</h3>
                <LoginForm onSubmit={this.onSubmit}/>
                {
                    this.props.error && 
                    this.props.error.type === 'authenticationError' &&
                    <p>{this.props.error.message}</p>
                }
            </div>
            
        )
    }   
}

const mapDispatchToProps = (dispatch) => ({
    startLogin : (user,callback) => dispatch(startLogin(user,callback)),
    getTodos : (token,callback) => dispatch(startGetTodos(token,callback)),
    fetchingData : () => dispatch(fetchingData()),
    dataFetched : () => dispatch(dataFetched())
});

const mapStateToProps = (state) => ({
    error : state.auth.error,
    
})


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);