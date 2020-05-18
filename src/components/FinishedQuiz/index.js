import React from 'react';
import classes from './index.module.css';

export default (props) => {
    return (
        <div className={classes.finishedQuiz}>
            <ul>
                <li>
                    <strong>1.</strong>
                    123
                    <i className={'fa fa-times ' + classes.error}/>
                </li>
                <li>
                    <strong>1.</strong>
                    123
                    <i className={'fa fa-check ' + classes.success}/>
                </li>
            </ul>

            <p>Правильно 4 из 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    ) 
};