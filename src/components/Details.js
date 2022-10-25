import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Details = () => {
    const course = useLoaderData();
    const { title, id, img, price, description, duration } = course;
    return (
        <div className='min-h-screen'>
            <div className='mt-8 md:w-8/12 w-11/12 mx-auto flex items-center justify-between'>
                <h2 className='md:text-3xl'>Course Title: {title}</h2>
                <button className='btn btn-accent '>Print a Copy</button>
            </div>
            <img src={img} className="md:w-8/12 w-11/12 md:h-96 mx-auto my-8" alt="" />
            <div className='md:w-8/12 w-11/12 mx-auto'>
                <p className='text-xl'>Duration: {duration} hours</p>
                <p className='text-3xl my-4'>Price: {price}$</p>
            </div>
            <p className='md:w-8/12 w-11/12 mx-auto my-8'>{description}</p>
            <div className='text-center mb-8'>
                <Link to={`/checkout/${id}`} className='btn btn-accent'>Get premium access</Link>
            </div>
        </div>
    );
};

export default Details;