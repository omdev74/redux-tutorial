import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import counterReducer from "./store/reducers/counter";
import resultReducer from './store/reducers/result';

import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from 'redux-thunk';

const logger_Middleware = store =>{
    return next=>{
        return action =>{
            console.log("[Middelware] Dispatching",action);
            const result = next(action);
            console.log("[Middelware] next State",store.getState());
            console.log("[next()] \n",next)
            console.log("[action] \n",action)
            console.log("[next(action)] \n",result)
            return result;
        }
        
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger_Middleware,thunk)));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
    );
registerServiceWorker();
