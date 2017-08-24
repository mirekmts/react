import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'; //Webpack can import CSS files too!

ReactDOM.render(
    <Routes />,
    document.getElementById('app')
);
