import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import getStore from './store/config';
import AppRoutes, { history } from './routes/routes';
import {login} from './actions/auth';
import {startGetTodos} from './actions/todos';

import 'normalize.css/normalize.css';
import './style/style.scss';

const store = getStore();

const user = JSON.parse(localStorage.getItem("user"));

if(user) {
    console.log(history.location.pathname);
    store.dispatch(login(user));
    store.dispatch(startGetTodos(user.token));
}
  
const jsx = (
    <Provider store={store}>
        <AppRoutes />
    </Provider>
)

const container = document.getElementById('container');

ReactDOM.render(jsx, container);

