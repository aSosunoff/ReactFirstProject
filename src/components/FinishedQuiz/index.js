import React from "react";
import classes from "./index.module.css";

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
						<li keu={inx}>
							<strong>{inx + 1}</strong>&nbsp;
							{question}
							<i className={cls.join(" ")} />
						</li>
					);
				})}
			</ul>

			<p>Правильно {successCount} из {props.quiz.length}</p>

			<div>
				<button onClick={props.onRetry}>Повторить</button>
			</div>
		</div>
	);
};
