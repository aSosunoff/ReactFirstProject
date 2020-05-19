import React from 'react';
import classes from './index.module.css';

export default (props) => {
    const cls = [
        classes.button,
        classes[props.type],
    ];

    return (
        <button
            className={cls.join(' ')}
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}