import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import LeftNav from './LeftNav';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div className='min-h-screen courses'>
            <LeftNav
                courses={courses}
            ></LeftNav>
            <div className='grid md:grid-cols-3 gap-6 m-4'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;