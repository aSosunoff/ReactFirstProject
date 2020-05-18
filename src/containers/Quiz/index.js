import React from "react";
import classes from "./index.module.css";
import ActiveQuiz from "../../components/ActiveQuiz";

export default class extends React.Component {
	state = {
		quiz: [],
	};

	render() {
		return (
			<div className={classes.quiz}>
				<div className={classes.quizWrapper}>
					<h1>QUIZ</h1>
					<ActiveQuiz />
				</div>
			</div>
		);
	}
}
