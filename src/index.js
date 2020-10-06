//third party
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// internal
import App from './components/App';
import reducers from './reducers';

//PROVIDER
ReactDOM.render(
    <Provider store = {createStore(reducers)} >
        <App />
    </Provider>,
    document.querySelector('#root')
);
