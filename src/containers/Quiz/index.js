import React from "react";
import classes from "./index.module.css";
import ActiveQuiz from "../../components/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz";
import Loader from "../../components/UI/loader/";
import axios from "../../utils/axios";

export default class extends React.Component {
	state = {
		results: {}, // [id]: success | error
		isFinished: false,
		activeQuestion: 0,
		answerState: null, // [id]: success | error
		quiz: [],
		loading: true,
	};

	async componentDidMount() {
		const {
			data: { quizes: quiz },
		} = await axios.get(`quiz/item/${this.props.match.params.id}`);
		this.setState({
			quiz,
			loading: false,
		});
	}

	onAnswerClickHandler = (answerId) => {
		if (this.state.answerState) {
			return;
		}

		const question = this.state.quiz[this.state.activeQuestion];
		const results = this.state.results;

		if (question.rightAnswerId === answerId) {
			results[question._id] = "success";
			this.setState({
				answerState: {
					[answerId]: "success",
					results,
				},
			});
		} else {
			results[question._id] = "error";
			this.setState({
				answerState: {
					[answerId]: "error",
					results,
				},
			});
		}

		const timeout = setTimeout(() => {
			if (this.isQuizFinished()) {
				this.setState({
					isFinished: true,
				});
			} else {
				this.setState({
					activeQuestion: this.state.activeQuestion + 1,
					answerState: null,
				});
			}
			clearTimeout(timeout);
		}, 1000);
	};

	isQuizFinished() {
		return this.state.activeQuestion + 1 === this.state.quiz.length;
	}

	retryHandler = () => {
		this.setState({
			activeQuestion: 0,
			answerState: null,
			isFinished: false,
			results: {},
		});
	};

	render() {
		return (
			<div className={classes.quiz}>
				<div className={classes.quizWrapper}>
					{this.state.loading ? (
						<Loader />
					) : this.state.isFinished ? (
						<FinishedQuiz
							results={this.state.results}
							quiz={this.state.quiz}
							onRetry={this.retryHandler}
						/>
					) : (
						<ActiveQuiz
							quiz={this.state.quiz[this.state.activeQuestion]}
							onAnswerClick={this.onAnswerClickHandler}
							quizLength={this.state.quiz.length}
							answerNumber={this.state.activeQuestion + 1}
							answerState={this.state.answerState}
						/>
					)}
				</div>
			</div>
		);
	}
}
