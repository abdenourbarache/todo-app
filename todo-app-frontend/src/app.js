import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import getStore from './store/config';
import AppRoutes from './routes/routes';

const store = getStore();

const jsx = (
    <Provider store={store}>
        <AppRoutes />
    </Provider>
)

const container = document.getElementById('container');

ReactDOM.render(jsx, container);