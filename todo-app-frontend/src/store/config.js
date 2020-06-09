import {combineReducers,createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";

import authReducer from './../reducers/auth'; 
import todosReducer from './../reducers/todos';
import loadingReducer from './../reducers/loading';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose ;

const appReducer = combineReducers({
    auth : authReducer,
    todos : todosReducer,
    loading : loadingReducer
  });
  
const rootReducer = (state, action) => {

    if (action.type === 'LOGOUT') {
      state = undefined;
    }
    return appReducer(state, action);
  };

export default () => {
    return createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
} 
