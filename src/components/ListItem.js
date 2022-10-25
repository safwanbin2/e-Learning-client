import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({course}) => {
    return (
        <li>
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
        </li>
    );
};

export default ListItem;