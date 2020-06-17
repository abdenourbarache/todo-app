import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './../components/Header';

export const PrivateRoute = ({
    path,
    isAuthenticated,
    component : Component,
    ...rest
}) =>( 
    <Route {...rest} component= {(props) =>(
            isAuthenticated ? (
                <div>
                    <Header />
                    <Component {...props}/>
                </div>
                
            )  : ( 
            <Redirect to="/"/>
            )
    )}/>
);


const mapStateToProps = (state) => ({
    isAuthenticated : !!state.auth.user
})

export default connect(mapStateToProps)(PrivateRoute);