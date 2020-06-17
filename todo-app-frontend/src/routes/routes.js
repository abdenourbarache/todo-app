import React from 'react';
import {BrowserRouter, Switch, Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {createBrowserHistory} from 'history';

import HomePage from './../components/HomePage'; 
import LoginPage from './../components/LoginPage';
import Dashboard from '../components/Dashboard';
import AddTodoPage  from '../components/AddTodoPage';
import TodoPage from '../components/TodoPage';
import RegisterPage from '../components/RegisterPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute  from './PublicRoute';

import Loading from './../components/Loading';

export const history = createBrowserHistory();

const AppRoutes = (props) => {
    const app = props.loading ? <Loading/> : (    
        <Router history={history}>
            <div>
                <Switch>
                    <PublicRoute path="/" component= {HomePage} exact={true}/>
                    <PublicRoute path="/login" component={LoginPage}/>
                    <PublicRoute path ="/register" component ={RegisterPage}/>
                    <PrivateRoute path ="/dashboard" component={Dashboard}/>
                    <PrivateRoute path ="/create" component={AddTodoPage}/>
                    <PrivateRoute path ="/todos/:id" component ={TodoPage}/>    
                </Switch>
            </div>
        </Router>
    );
    return app;
    
};

const mapStateToProps = (state) => ({
    loading : state.loading
})

export default connect(mapStateToProps)(AppRoutes);