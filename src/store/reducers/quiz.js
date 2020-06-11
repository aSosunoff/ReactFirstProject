import {
	QUIZE_SUCCESS,
	QUIZE_START,
	QUIZE_ERROR,
	QUIZE_RETRY,
	QUIZE_FINISH,
	QUIZE_SET_ANSWER,
	QUIZE_NEXT_ACTIVE_QUESTION,
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
		case QUIZE_RETRY:
			return {
				...state,
				activeQuestion: 0,
				answerState: null,
				isFinished: false,
				results: {},
			};
		case QUIZE_FINISH:
			return {
				...state,
				isFinished: true,
			};
		case QUIZE_SET_ANSWER:
			return {
				...state,
				answerState: action.answerState,
				results: action.results,
			};
		case QUIZE_NEXT_ACTIVE_QUESTION:
			return {
				...state,
				activeQuestion: state.activeQuestion + 1,
				answerState: null,
			};
		default:
			return state;
	}
};
