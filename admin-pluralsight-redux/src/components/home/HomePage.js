import React from 'react';
var NavLink = require('react-router-dom').NavLink;

class HomePage extends React.Component {
    render(){
        return(
            <div className="jumbotron">
                <h1>Pluralsight Administrator</h1>
                <p>React, Redux and React Router in ES6</p>
                <NavLink to="/about" className="btn btn-primary btn-lg">Learn more</NavLink>
            </div>
        );
    }
}

export default HomePage;
