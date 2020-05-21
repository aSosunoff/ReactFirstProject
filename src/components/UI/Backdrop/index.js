import React from "react";
import classes from "./index.module.css";

export default (props) => <div className={classes.backdrop} onClick={props.onClick}></div>;
