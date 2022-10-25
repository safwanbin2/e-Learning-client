import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h3 className='text-4xl font-semibold text-error'>404</h3>
            <h2 className='text-2xl'>Page Not Found</h2>
            <Link to='/' className='mt-2 btn'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;