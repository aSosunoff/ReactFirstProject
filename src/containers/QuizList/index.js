import React from "react";
import classes from "./index.module.css";
import { NavLink } from "react-router-dom";
import Loader from "../../components/UI/loader/";

export default class extends React.Component {
	state = {
		quizes: [],
		loading: true,
	};

	async componentDidMount() {
		const { data: list } = await window.axiosTransport.get("quiz/list");
		this.setState({
			quizes: list,
			loading: false,
		});
	}

	renderQuizes() {
		return this.state.quizes.map(({ _id }, inx) => {
			return (
				<li key={inx}>
					<NavLink to={`/quiz/${_id}`}>Тест № {inx + 1}</NavLink>
				</li>
			);
		});
	}

	render() {
		return (
			<div className={classes.quizList}>
				<h1>Список тестов</h1>

				{this.state.loading ? <Loader /> : <ul>{this.renderQuizes()}</ul>}
			</div>
		);
	}
}
