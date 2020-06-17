import axios from 'axios';
import { fetchingData, dataFetched } from './loading';

const API_URL = "http://localhost:3000/users/";

export const login = (user = {}) => ({
        type: "LOGIN",
        user
})

export const startLogin = (user = {}, callback) => {

    const {
        email
    } = user;

    return (dispatch) => {
        dispatch(fetchingData());
        axios.post(API_URL + 'login', user)
            .then(res => {
                dispatch(dataFetched());
                callback(res.headers["x-auth"]);
                const userObj = {
                    _id: res.data._id,
                    email,
                    token: res.headers["x-auth"]
                } 
                dispatch(login(userObj));
                localStorage.setItem("user",JSON.stringify(userObj));   
            })
            .catch(err => 
                dispatch(loginFailure({
                    type: "authenticationError",
                    message: "Please verify your credentials"
                }))
            )
    }
}

export const startRegister = (user = {}, callback) => {

    const {
        email,
        password
    } = user;

    return (dispatch) => {
        dispatch(fetchingData());
        axios.post(API_URL, user)
            .then(res => {
                dispatch(dataFetched());
                const userObj = {
                    _id: res.data._id,
                    email,
                    token: res.headers["x-auth"]
                }
                dispatch(login(userObj));
                localStorage.setItem("user",JSON.stringify(userObj));
                callback();
            })
            .catch(err => 
                dispatch(registerFailure({
                    type: "registrationError",
                    message: "Email already in use"
                }))

            )
    }
}

export const logout = () => ({
        type: "LOGOUT"
})


export const  startLogout = (token) =>{
    return (dispatch) => {
        axios.delete(API_URL+'logout',
            {
                headers: {
                    'x-auth': token
                }
            }).then(res => {
                dispatch(logout());
                localStorage.removeItem("user");
            })
    }
}


export const loginFailure = (error) => ({
        type: "LOGGED_FAILURE",
        error
})

export const registerFailure = (error) => ({
        type: "REGISTER_FAILURE",
        error
})
