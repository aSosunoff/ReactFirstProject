import {
	QUIZE_AUTH_START,
	QUIZE_AUTH_ERROR,
	QUIZE_AUTH_SUCCESS,
	QUIZE_AUTH_LOGOUT,
} from "../actions/actionsTypes";

const initialState = {
	loading: false,
	authenticated: false,
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
				authenticated: action.authenticated,
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
				authenticated: false,
			};
		default:
			return state;
	}
};
