import React from "react";
import classes from "./index.module.css";
import { NavLink } from "react-router-dom";

export default class extends React.Component {
	renderQuizes() {
		return [1, 2, 3].map((quiz, inx) => {
			return (
				<li key={inx}>
					<NavLink to={`/quiz/${quiz}`}>Тест {quiz}</NavLink>
				</li>
			);
		});
	}

	render() {
		return (
			<div className={classes.quizList}>
				<h1>Список тестов</h1>
				
				<ul>{this.renderQuizes()}</ul>
			</div>
		);
	}
}
