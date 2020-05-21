import React from "react";
import classes from "./index.module.css";
import MenuToggle from "../MenuToggle";
import Backdrop from "../../UI/Backdrop";

const links = [1, 2, 3];

export default class extends React.Component {
	renderLinks() {
		return links.map((link, inx) => {
			return (
				<li key={inx}>
					<a href="#">{link}</a>
				</li>
			);
		});
	}

	render() {
		const cls = [classes.drawer];

		if (!this.props.isOpen) {
			cls.push(classes.close);
		}

		return (
			<>
				{this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
				
				<MenuToggle
					isOpen={this.props.isOpen}
					onToggle={this.props.onToggle}
				/>

				<nav className={cls.join(" ")}>
					<ul>{this.renderLinks()}</ul>
				</nav>
			</>
		);
	}
}
