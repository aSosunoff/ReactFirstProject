import React from "react";
import classes from "./index.module.css";
import MenuToggle from "../MenuToggle";
import Backdrop from "../../UI/Backdrop";
import { NavLink } from "react-router-dom";

export default class extends React.Component {
	renderLinks(links) {
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

		let links = [
			{
				to: "/",
				label: "Список",
				exact: true,
			},
		];

		if (this.props.isAuthenticated) {
			links = [
				...links,
				{
					to: "/quiz-creator",
					label: "Создать тест",
					exact: false,
				},
				{
					to: "/logout",
					label: "Выход",
					exact: false,
				},
			];
		} else {
			links = [
				...links,
				{
					to: "/auth",
					label: "Авторизация",
					exact: false,
				},
			];
		}

		return (
			<>
				{this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}

				<MenuToggle isOpen={this.props.isOpen} onToggle={this.props.onToggle} />

				<nav className={cls.join(" ")}>
					<ul>{this.renderLinks(links)}</ul>
				</nav>
			</>
		);
	}
}
