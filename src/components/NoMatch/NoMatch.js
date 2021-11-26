import React from 'react';
import logo from '../../images/download (1).png';

const NoMatch = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <h1>We are sorry, the page you requested cannot be found.</h1>
        </div>
    );
};

export default NoMatch;