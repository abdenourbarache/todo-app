import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export const PublicRoute = ({
    path,
    isAuthenticated,
    component : Component,
    ...rest
}) => (
    <Route {...rest} component= {(props) =>(
        isAuthenticated ? (
            <Redirect to="/dashboard"/>
        ) : (
            <Component {...props}/>
        ) 
    )}/>
);


const mapStateToProps = (state) => ({
    isAuthenticated : !!state.auth.user
})

export default connect(mapStateToProps)(PublicRoute);