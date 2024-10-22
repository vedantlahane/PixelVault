import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-700 mb-6">
                Welcome to PixelVault! We are dedicated to providing the best digital art experience.
            </p>
            <p className="text-lg text-gray-700 mb-6">
                Our platform allows artists to showcase their work, connect with other artists, and sell their creations. We believe in the power of digital art to inspire and transform.
            </p>
            <p className="text-lg text-gray-700 mb-6">
                Whether you are an artist looking to share your work or an art enthusiast looking for inspiration, PixelVault is the place for you. Join our community and explore the endless possibilities of digital art.
            </p>
            <Link
                to="/"
                className="inline-block px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
                Go back to Home
            </Link>
        </div>
    );
};

export default About;
