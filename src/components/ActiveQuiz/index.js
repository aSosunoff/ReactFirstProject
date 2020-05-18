import React from "react";
import classes from "./index.module.css";

export default (props) => (
    <div className={classes.activeQiuz}>
        <p className={classes.question}>
            <span>
                <strong>2.</strong>&nbsp;
                Как дела
            </span>

            <smal>4 из 12</smal>
        </p>

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
);
