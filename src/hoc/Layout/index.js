import React from "react";
import classes from "./index.module.css";
import Drawer from "../../components/Navigation/Drawer";
import { connect } from "react-redux";

class Layout extends React.Component {
	state = {
		isOpenMenu: false,
	};

	toggleMenuHandler = () => {
		this.setState({
			isOpenMenu: !this.state.isOpenMenu,
		});
	};

	menuClose = () => {
		this.setState({
			isOpenMenu: false,
		});
	};

	render() {
		return (
			<div className={classes.layout}>
				<Drawer
					isAuthenticated={this.props.isAuthenticated}
					isOpen={this.state.isOpenMenu}
					onClose={this.menuClose}
					onToggle={this.toggleMenuHandler}
				/>
				<main>{this.props.children}</main>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
	};
};

export default connect(mapStateToProps)(Layout);
