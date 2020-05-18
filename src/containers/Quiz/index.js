import React from "react";
import classes from "./index.module.css";
import ActiveQuiz from "../../components/ActiveQuiz";

export default class extends React.Component {
	state = {
		activeQuestion: 0,
		answerState: null,
		quiz: [
			{
				id: 1,
				question: "Какого цвета небо?",
				rightAnswerId: 2,
				answers: [
					{ id: 1, text: "Чёрный" },
					{ id: 2, text: "Синий" },
					{ id: 3, text: "Красный" },
					{ id: 4, text: "Зелёный" },
				],
			},
			{
				id: 2,
				question: "В каком году основали Санкт-Петербург?",
				rightAnswerId: 3,
				answers: [
					{ id: 1, text: "1700" },
					{ id: 2, text: "1702" },
					{ id: 3, text: "1703" },
					{ id: 4, text: "1803" },
				],
			},
		],
	};

	onAnswerClickHandler = (answerId) => {
		const question = this.state.quiz[this.state.activeQuestion];

		if (question.rightAnswerId === answerId) {
			this.setState({
				answerState: {
					[answerId]: "success",
				},
			});

			const timeout = setTimeout(() => {
				if (this.isQuizFinished()) {
					console.log("FINISHED");
				} else {
					this.setState({
						activeQuestion: this.state.activeQuestion + 1,
						answerState: null,
					});
				}
				clearTimeout(timeout);
			}, 1000);
		} else {
			this.setState({
				answerState: {
					[answerId]: "error",
				},
			});
		}
	};

	isQuizFinished() {
		return this.state.activeQuestion + 1 === this.state.quiz.length;
	}

	render() {
		return (
			<div className={classes.quiz}>
				<div className={classes.quizWrapper}>
					<h1>Ответьте на все вопросы</h1>
					<ActiveQuiz
						answers={this.state.quiz[this.state.activeQuestion].answers}
						question={this.state.quiz[this.state.activeQuestion].question}
						onAnswerClick={this.onAnswerClickHandler}
						quizLength={this.state.quiz.length}
						answerNumber={this.state.activeQuestion + 1}
						answerState={this.state.answerState}
					/>
				</div>
			</div>
		);
	}
}
