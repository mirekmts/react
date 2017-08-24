import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// var ReactRouter = require('react-router-dom');
// var Router = ReactRouter.BrowserRouter;
// var Route = ReactRouter.Route;
// var Switch = ReactRouter.Switch;
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <App />
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/about' component={AboutPage} />
                        <Route render = { function() {
                            return <p>Not found </p>
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routes;
