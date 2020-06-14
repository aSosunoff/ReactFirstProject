import React from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";

class Logout extends React.Component {
	async componentDidMount() {
		await this.props.logout();
	}

	render() {
		return <></>;
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(logout()),
	};
};

export default connect(null, mapDispatchToProps)(Logout);
