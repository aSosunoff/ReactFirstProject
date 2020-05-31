import React from "react";
import classes from "./index.module.css";

export default (props) => {
    const cls = [classes.answerItem];

    if (props.answerState) {
        cls.push(classes[props.answerState]);
    }

	return (
		<li
			className={cls.join(' ')}
			onClick={() => props.onAnswerClick(props.answer.value)}
		>
			{props.answer.text}
		</li>
	);
};
