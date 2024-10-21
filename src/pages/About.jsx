import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to PixelVault! We are dedicated to providing the best digital art experience.</p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default About;