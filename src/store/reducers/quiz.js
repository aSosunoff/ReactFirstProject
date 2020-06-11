import {
	QUIZE_SUCCESS,
	QUIZE_START,
	QUIZE_ERROR,
} from "../actions/actionsTypes";

const initialState = {
	results: {}, // [id]: success | error
	isFinished: false,
	activeQuestion: 0,
	answerState: null, // [id]: success | error
	quiz: [],
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case QUIZE_START:
			return {
				...state,
				loading: true,
			};
		case QUIZE_SUCCESS:
			return {
				...state,
				quiz: action.quiz,
				loading: false,
			};

		case QUIZE_ERROR:
			return {
				...state,
				error: action.error,
				loading: false,
			};
		default:
			return state;
	}
};
