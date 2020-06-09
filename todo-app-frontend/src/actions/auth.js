import axios from 'axios';

const API_URL = "http://localhost:3000/users/";

export const login = (user = {}) => ({
        type: "LOGIN",
        user
})

export const startLogin = (user = {}, callback) => {

    const {
        email,
        password
    } = user;

    return (dispatch) => {
        axios.post(API_URL + 'login', user)
            .then(res => {
                callback(res.headers["x-auth"]);
                dispatch(
                    login({
                        _id: res.data._id,
                        email,
                        token: res.headers["x-auth"]
                }));    
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
        axios.post(API_URL, user)
            .then(res => {
                dispatch(
                    login({
                        _id: res.data._id,
                        email,
                        token: res.headers["x-auth"]
                    }));
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
            }).then(res => dispatch(logout()))
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
