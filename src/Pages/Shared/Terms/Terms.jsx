import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Condition</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsa odio officiis vero voluptate fuga, odit labore impedit pariatur aliquid nobis dicta ducimus! Vitae ullam, laborum sapiente excepturi eos esse?</p>
            <p>Go Back To <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;