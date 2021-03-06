import {
	QUIZE_LIST_START,
	QUIZE_LIST_SUCCESS,
	QUIZE_LIST_ERROR,
	QUIZE_LIST_DELETE_BY_ID,
} from "../actions/actionsTypes";

const initialState = {
	quizes: [],
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case QUIZE_LIST_START:
			return {
				...state,
				loading: true,
			};
		case QUIZE_LIST_SUCCESS:
			return {
				...state,
				quizes: action.list,
				loading: false,
			};
		case QUIZE_LIST_ERROR:
			return {
				...state,
				error: action.error,
				loading: false,
			};
		case QUIZE_LIST_DELETE_BY_ID:
			return {
				...state,
				quizes: [...state.quizes.filter(({ _id }) => _id !== action.id)],
				loading: false,
			};
		default:
			return state;
	}
};
