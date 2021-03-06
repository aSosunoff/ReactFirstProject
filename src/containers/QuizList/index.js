import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./index.module.css";
import Loader from "../../components/UI/loader/";
import { loadQuizes, DeleteById } from "../../store/actions/quizList";
import Button from "../../components/UI/Button";

class QuizList extends React.Component {
	componentDidMount() {
		this.props.loadQuizes();
	}
	
	renderQuizes() {
		return this.props.quizes.map(({ _id }, inx) => {
			return (
				<li key={inx}>
					<NavLink to={`/quiz/${_id}`}>Тест № {inx + 1}</NavLink>
					<Button type="error" onClick={() => this.props.DeleteById(_id)}>X</Button>
				</li>
			);
		});
	}

	render() {
		return (
			<div className={classes.quizList}>
				<h1>Список тестов</h1>

				{this.props.loading ? <Loader /> : <ul>{this.renderQuizes()}</ul>}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		quizes: state.quizList.quizes,
		loading: state.quizList.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadQuizes: () => dispatch(loadQuizes()),
		DeleteById: id => dispatch(DeleteById(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
