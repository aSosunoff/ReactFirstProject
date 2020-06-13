import {
	QUIZE_AUTH_START,
	QUIZE_AUTH_ERROR,
	QUIZE_AUTH_SUCCESS,
} from "../actions/actionsTypes";

const initialState = {
	loading: false,
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
				loading: false,
			};
		case QUIZE_AUTH_ERROR:
			return {
				...state,
				error: action.error,
				loading: false,
			};
		default:
			return state;
	}
};
