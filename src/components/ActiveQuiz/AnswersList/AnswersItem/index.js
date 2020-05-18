import React from 'react';
import classes from './index.module.css';

export default props => {
    return (
        <li className={classes.answerItem}>
            { props.answer.text }
        </li>
    );
};