import React from "react";
import classes from "./index.module.css";
import AnswersList from "./AnswersList";

export default (props) => {
	return props.quiz ? (
		<div className={classes.activeQiuz}>
			<h1>Ответьте на все вопросы</h1>

			<div className={classes.boxQuestion}>
				<p className={classes.question}>
					<span>
						<strong>{props.answerNumber}.</strong>&nbsp;
						{props.quiz.question}
					</span>

					<small>
						{props.answerNumber} из {props.quizLength}
					</small>
				</p>

				<AnswersList
					answerState={props.answerState}
					answers={props.quiz.answers}
					onAnswerClick={props.onAnswerClick}
				/>
			</div>
		</div>
	) : (
		<div className={classes.activeQiuz}>
			<h1>Необходимо создать вопросы</h1>
		</div>
	);
};
