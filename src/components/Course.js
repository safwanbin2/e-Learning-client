import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const {id, title, duration, img} = course;
    return (
        <div className="card glass">
            <figure><img src={img} className="w-full h-40" alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Duration: {duration} hours</p>
                <div className="card-actions justify-end">
                    <Link to={`/courses/${id}`} className="btn btn-primary">explore now!</Link>
                </div>
            </div>
        </div>
    );
};

export default Course;