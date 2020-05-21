import React from "react";
import classes from "./index.module.css";
import MenuToggle from "../../components/Navigation/MenuToggle";

export default class extends React.Component {
	state = {
		isOpenMenu: false,
	};

	toggleMenuHandler = () => {
		this.setState({
			isOpenMenu: !this.state.isOpenMenu,
		});
	};

	render() {
		return (
			<div className={classes.layout}>
				<MenuToggle
					isOpen={this.state.isOpenMenu}
					onToggle={this.toggleMenuHandler}
				/>
				<main>{this.props.children}</main>
			</div>
		);
	}
}
