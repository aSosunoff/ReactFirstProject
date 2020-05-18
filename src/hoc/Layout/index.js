import React from "react";
import classes from "./index.module.css";

export default class extends React.Component {
	render() {
		return (
			<div className={classes.layout}>
				<main>{this.props.children}</main>
			</div>
		);
	}
}
