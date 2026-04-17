import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
            <h1 className="text-9xl font-extrabold text-red-600">404</h1>
            
            <h2 className="text-3xl font-bold mt-4 text-gray-800">
                Oops! Page not found
            </h2>
            
            <p className="text-gray-500 mt-2 mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link 
                to="/" 
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;