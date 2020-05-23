import React from "react";
import classes from "./index.module.css";
import MenuToggle from "../MenuToggle";
import Backdrop from "../../UI/Backdrop";
import { NavLink } from "react-router-dom";

const links = [
	{
		to: "/",
		label: "Список",
		exact: true,
	},
	{
		to: "/auth",
		label: "Авторизация",
		exact: false,
	},
	{
		to: "/quiz-creator",
		label: "Создать тест",
		exact: false,
	},
];

export default class extends React.Component {
	renderLinks() {
		return links.map(({ to, exact, label }, inx) => {
			return (
				<li key={inx}>
					<NavLink
						to={to}
						exact={exact}
						activeClassName={classes.active}
						onClick={this.props.onClose}
					>
						{label}
					</NavLink>
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

				<MenuToggle isOpen={this.props.isOpen} onToggle={this.props.onToggle} />

				<nav className={cls.join(" ")}>
					<ul>{this.renderLinks()}</ul>
				</nav>
			</>
		);
	}
}
