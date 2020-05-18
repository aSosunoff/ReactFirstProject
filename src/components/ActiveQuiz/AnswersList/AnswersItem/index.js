import React from "react";
import classes from "./index.module.css";

export default (props) => {
	return (
		<li
			className={classes.answerItem}
			onClick={() => props.onAnswerClick(props.answer.id)}
		>
			{props.answer.text}
		</li>
	);
};
