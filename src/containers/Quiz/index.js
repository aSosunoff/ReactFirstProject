import React from "react";
import classes from "./index.module.css";

export default class extends React.Component {
    state = {
        quiz: [],
    }

	render() {
		return (
			<div className={classes.quiz}>
				<h1>QUIZ</h1>
			</div>
		);
	}
}
