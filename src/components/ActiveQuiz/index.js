import React from "react";
import classes from "./index.module.css";
import AnswersList from "./AnswersList";

export default (props) => (
	<div className={classes.activeQiuz}>
		<p className={classes.question}>
			<span>
				<strong>2.</strong>&nbsp;
				{props.question}
			</span>

			<small>4 из 12</small>
		</p>

        <AnswersList 
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            />
	</div>
);
