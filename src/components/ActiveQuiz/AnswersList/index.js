import React from "react";
import classes from "./index.module.css";
import AnswersItem from "./AnswersItem";

export default (props) => {
	return (
		<ul className={classes.answersList}>
			{props.answers.map((answer, inx) => {
				return (
					<AnswersItem
						key={inx}
						answer={answer}
						onAnswerClick={props.onAnswerClick}
						answerState={props.answerState ? props.answerState[answer.value] : null }
					/>
				);
			})}
		</ul>
	)
};
