import React from "react";
import classes from "./index.module.css";
import Button from "../UI/Button";

export default (props) => {
	const successCount = Object.keys(props.results).reduce((total, key) => {
		if (props.results[key] === "success") {
			total++;
		}
		return total;
	}, 0);

	return (
		<div className={classes.finishedQuiz}>
			<ul>
				{props.quiz.map(({ id, question }, inx) => {
					const cls = [
						"fa",
						props.results[id] === "error" ? "fa-times" : "fa-check",
						classes[props.results[id]],
					];

					return (
						<li key={inx}>
							<strong>{inx + 1}</strong>&nbsp;
							{question}
							<i className={cls.join(" ")} />
						</li>
					);
				})}
			</ul>

			<p>
				Правильно {successCount} из {props.quiz.length}
			</p>

			<div>
				<Button onClick={props.onRetry} type="primary">
					Повторить
				</Button>
				<Button type="success">Перейти в список тестов</Button>
			</div>
		</div>
	);
};
