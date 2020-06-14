import {
	QUIZE_AUTH_START,
	QUIZE_AUTH_ERROR,
	QUIZE_AUTH_SUCCESS,
	QUIZE_AUTH_LOGOUT,
} from "../actions/actionsTypes";

const initialState = {
	loading: false,
	isAuthenticated: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case QUIZE_AUTH_START:
			return {
				...state,
				loading: true,
			};
		case QUIZE_AUTH_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
			};
		case QUIZE_AUTH_ERROR:
			return {
				...state,
				error: action.error,
				loading: false,
			};
		case QUIZE_AUTH_LOGOUT:
			return {
				...state,
				isAuthenticated: false,
				loading: false,
			};
		default:
			return state;
	}
};
