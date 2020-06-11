import React from "react";
import { connect } from "react-redux";
import classes from "./index.module.css";
import ActiveQuiz from "../../components/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz";
import Loader from "../../components/UI/loader/";
import { getQuizById } from '../../store/actions/quiz';

class Quiz extends React.Component {
	/* state = {
		results: {}, // [id]: success | error
		isFinished: false,
		activeQuestion: 0,
		answerState: null, // [id]: success | error
		quiz: [],
		loading: true,
	}; */

	componentDidMount() {
		this.props.getQuizById(this.props.match.params.id);
	}

	onAnswerClickHandler = (answerId) => {
		if (this.props.answerState) {
			return;
		}

		const question = this.props.quiz[this.props.activeQuestion];
		const results = this.props.results;

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
					activeQuestion: this.props.activeQuestion + 1,
					answerState: null,
				});
			}
			clearTimeout(timeout);
		}, 1000);
	};

	isQuizFinished() {
		return this.props.activeQuestion + 1 === this.props.quiz.length;
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
					{this.props.loading ? (
						<Loader />
					) : this.props.isFinished ? (
						<FinishedQuiz
							results={this.props.results}
							quiz={this.props.quiz}
							onRetry={this.retryHandler}
						/>
					) : (
						<ActiveQuiz
							quiz={this.props.quiz[this.props.activeQuestion]}
							onAnswerClick={this.onAnswerClickHandler}
							quizLength={this.props.quiz.length}
							answerNumber={this.props.activeQuestion + 1}
							answerState={this.props.answerState}
						/>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		results: state.quiz.results,
		isFinished: state.quiz.isFinished,
		activeQuestion: state.quiz.activeQuestion,
		answerState: state.quiz.answerState,
		quiz: state.quiz.quiz,
		loading: state.quiz.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getQuizById: id => dispatch(getQuizById(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
