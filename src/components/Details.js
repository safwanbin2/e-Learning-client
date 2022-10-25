import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const course = useLoaderData();
    const {title, id, img, price, description, duration} = course;
    return (
        <div className='min-h-screen'>
            <img src={img} className="w-8/12 mx-auto my-8" alt="" />
            <div className='w-8/12 mx-auto'>
                <h2 className='text-3xl'>Course Title: {title}</h2>
                <p className='text-xl'>Duration: {duration}</p>
                <p className='text-3xl my-4'>Price: {price}$</p>
            </div>
            <p className='w-8/12 mx-auto my-8'>{description}</p>
        </div>
    );
};

export default Details;