import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();

    return (
        <div className='min-h-screen flex items-center justify-center flex-col'>
            <div className="hero" style={{ backgroundImage: `url(${course.img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{course.title}</h1>
                        <p className="mb-5">Price: {course.price} $</p>
                        <p className="mb-5">Duration: {course.duration} hours</p>
                        <button className='btn btn-primary'>Finalize</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;