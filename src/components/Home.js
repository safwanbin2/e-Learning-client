import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/banner.jpg';

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">eLearning</h1>
                    <p className="mb-5">An online platform to teach beginner students web technology focused programming. Join the journey with our batch 5.</p>
                    <Link to='/courses' className="btn btn-primary">Explore Courses</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;