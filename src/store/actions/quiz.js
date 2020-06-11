import axios from "../../utils/axios";
import {
	QUIZE_START,
	QUIZE_SUCCESS,
	QUIZE_ERROR,
	QUIZE_RETRY,
	QUIZE_FINISH,
	QUIZE_SET_ANSWER,
	QUIZE_NEXT_ACTIVE_QUESTION,
} from "./actionsTypes";

export const GetQuizById = (id) => {
	return async (dispatch) => {
		try {
			dispatch(Start());
			const {
				data: { quizes: quiz },
			} = await axios.get(`quiz/item/${id}`);
			dispatch(Success(quiz));
		} catch (error) {
			dispatch(Error(error));
		}
	};
};

export const Start = () => {
	return {
		type: QUIZE_START,
	};
};

export const Success = (quiz) => {
	return {
		type: QUIZE_SUCCESS,
		quiz,
	};
};

export const Error = (error) => {
	return {
		type: QUIZE_ERROR,
		error,
	};
};

export const Retry = () => {
	return {
		type: QUIZE_RETRY,
	};
};

export const Finish = () => {
	return {
		type: QUIZE_FINISH,
	};
};

export const SetAnswer = (answerState, results) => {
	return {
		type: QUIZE_SET_ANSWER,
		answerState,
		results,
	};
};

export const NextActiveQuestion = () => {
	return {
		type: QUIZE_NEXT_ACTIVE_QUESTION,
	};
};

const isFinish = (store) => store.activeQuestion + 1 === store.quiz.length;

export const AnswerClick = (answerId) => {
	return (dispatch, getState) => {
		const store = getState().quiz;

		if (store.answerState) {
			return;
		}

		const question = store.quiz[store.activeQuestion];
		const results = store.results;

		if (question.rightAnswerId === answerId) {
			dispatch(SetAnswer({ [answerId]: "success" }, results));
		} else {
			dispatch(
				SetAnswer(
					{ [answerId]: "error" },
					{
						...results,
						[question._id]: "error",
					}
				)
			);
		}

		const timeout = setTimeout(() => {
			if (isFinish(store)) {
				dispatch(Finish());
			} else {
				dispatch(NextActiveQuestion());
			}
			clearTimeout(timeout);
		}, 1000);
	};
};
