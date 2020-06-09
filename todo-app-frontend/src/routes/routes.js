import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import HomePage from './../components/HomePage'; 
import LoginPage from './../components/LoginPage';
import Dashboard from '../components/Dashboard';
import AddTodoPage  from '../components/AddTodoPage';
import TodoPage from '../components/TodoPage';
import RegisterPage from '../components/RegisterPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute  from './PublicRoute';

const AppRoutes = () => (
    <BrowserRouter>
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
    </BrowserRouter>
);

export default AppRoutes;