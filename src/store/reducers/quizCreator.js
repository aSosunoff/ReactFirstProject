import {
	QUIZE_CREATOR_ERROR,
	QUIZE_CREATOR_RESET,
	QUIZE_CREATOR_ADD_QUESTION,
} from "../actions/actionsTypes";

const initialState = {
	quiz: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case QUIZE_CREATOR_ERROR:
			return {
				...state,
				error: action.error,
			};
		case QUIZE_CREATOR_RESET:
			return {
				...state,
				quiz: [],
			};
		case QUIZE_CREATOR_ADD_QUESTION:
			return {
				...state,
				quiz: [...state.quiz, action.questionItem],
			};
		default:
			return state;
	}
};
