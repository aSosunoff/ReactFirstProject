import React from "react";
import classes from "./index.module.css";
import ActiveQuiz from "../../components/ActiveQuiz";

export default class extends React.Component {
	state = {
		quiz: [
			{
				question: 'Какого цвета небо?',
				rightAnswerId: 2,
				answers: [
					{ id: 1, text: "Чёрный" },
					{ id: 2, text: "Синий" },
					{ id: 3, text: "Красный" },
					{ id: 4, text: "Зелёный" },
				],
			},
		],
	};

	onAnswerClickHandler = (answerId) => {
		console.log('onAnswerClickHandler', answerId);
	}

	render() {
		return (
			<div className={classes.quiz}>
				<div className={classes.quizWrapper}>
					<h1>Ответьте на все вопросы</h1>
					<ActiveQuiz 
						answers={this.state.quiz[0].answers}
						question={this.state.quiz[0].question}
						onAnswerClick={this.onAnswerClickHandler}
					/>
				</div>
			</div>
		);
	}
}
