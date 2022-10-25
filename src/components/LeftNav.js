import React from 'react';
import ListItem from './ListItem';

const LeftNav = ({ courses }) => {
    return (
        <div className='bg-base-200'>
            <ul className="menu bg-base-100 m-2">
                {
                    courses.map(course => <ListItem
                        key={course.id}
                        course={course}
                    ></ListItem>)
                }
            </ul>
        </div>
    );
};

export default LeftNav;