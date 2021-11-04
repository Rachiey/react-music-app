import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

let initState ={
    artistName: 'ABBA',
    musicType: 'Pop',
    intro: 'intro here'
}


function myReducer(state=initState, action){
    switch(action.type){
        case 'UPDATE_NAME':
            return {...state, artistName: action.payload };
        case 'UPDATE_TYPE':
            return {...state, musicType: action.payload};
        case 'UPDATE_INTRO':
            return {...state, intro: action.payload }
        default:
            return state;
    }
}

let store = createStore(myReducer, devToolsEnhancer());


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
             <Router>
                 <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);