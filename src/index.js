import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root.js";
import { Provider } from 'react-redux';
import store from './store';
import './styles/Root.css';
ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);