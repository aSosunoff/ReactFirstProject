import axios from "../../utils/axios";
import {
	QUIZE_CREATOR_ERROR,
	QUIZE_CREATOR_RESET,
	QUIZE_CREATOR_ADD_QUESTION,
} from "./actionsTypes";

export const QuizCreate = () => {
	return async (dispatch, getStore) => {
		try {
			await axios.post("quiz/create", {
				quizes: getStore().quizCreator.quiz,
			});
			dispatch(Reset());
		} catch (error) {
			dispatch(Error(error));
		}
	};
};

export const Error = (error) => {
	return {
		type: QUIZE_CREATOR_ERROR,
		error,
	};
};

export const Reset = () => {
	return {
		type: QUIZE_CREATOR_RESET,
	};
};

export const AddQuestion = (questionItem) => {
	return {
		type: QUIZE_CREATOR_ADD_QUESTION,
		questionItem,
	}
};