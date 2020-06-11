import React from "react";
import { connect } from "react-redux";
import classes from "./index.module.css";
import ActiveQuiz from "../../components/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz";
import Loader from "../../components/UI/loader/";
import { GetQuizById, Retry, AnswerClick } from "../../store/actions/quiz";

class Quiz extends React.Component {
	componentDidMount() {
		this.props.Retry();
		this.props.GetQuizById(this.props.match.params.id);
	}

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
							onRetry={this.props.Retry}
						/>
					) : (
						<ActiveQuiz
							quiz={this.props.quiz[this.props.activeQuestion]}
							onAnswerClick={this.props.AnswerClick}
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
		GetQuizById: (id) => dispatch(GetQuizById(id)),
		Retry: () => dispatch(Retry()),
		AnswerClick: (answerId) => dispatch(AnswerClick(answerId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
