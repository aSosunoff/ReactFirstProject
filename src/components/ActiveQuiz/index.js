import React from "react";
import classes from "./index.module.css";
import AnswersList from "./AnswersList";

export default (props) => (
	<div className={classes.activeQiuz}>
		<p className={classes.question}>
			<span>
				<strong>2.</strong>&nbsp;
				{props.question}
			</span>

			<small>
				{props.answerNumber} из {props.quizLength}
			</small>
		</p>

		<AnswersList
			answerState={props.answerState}
			answers={props.answers}
			onAnswerClick={props.onAnswerClick}
		/>
	</div>
);
