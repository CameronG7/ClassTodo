// enables us to use jsx
import React from 'react';
// take jsx and put it on the webpage
// this is the only place you need this
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Provider links react with redux, needs 1 prop, the store
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// React builds a SPA (single page application)