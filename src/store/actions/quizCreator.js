import axios from "../../utils/axios";
import {
	QUIZE_CREATOR_ERROR,
	QUIZE_CREATOR_RESET,
	QUIZE_CREATOR_SET_RIGHT_ANSWER_ID,
	QUIZE_CREATOR_ADD_QUESTION,
	QUIZE_CREATOR_CHANGE,
} from "./actionsTypes";

export const QuizCreate = () => {
	return async (dispatch, getStore) => {
		try {
			const store = getStore().quizCreator;
			await axios.post("quiz/create", {
				quizes: store.quiz,
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

export const SetRightAnswerId = (id) => {
	return {
		type: QUIZE_CREATOR_SET_RIGHT_ANSWER_ID,
		id,
	};
};

export const Change = (value, controlName) => {
	return {
		type: QUIZE_CREATOR_CHANGE,
		value,
		controlName,
	};
};

export const AddQuestion = () => {
	return (dispatch, getStore) => {
		const store = getStore().quizCreator;

		const quiz = [...store.quiz];
		const index = quiz.length + 1;

		const {
			question,
			option1,
			option2,
			option3,
			option4,
		} = store.formControls;

		const questionItem = {
			question: question.value,
			id: index,
			rightAnswerId: store.rightAnswerId,
			answers: [
				{ text: option1.value, value: option1.id },
				{ text: option2.value, value: option2.id },
				{ text: option3.value, value: option3.id },
				{ text: option4.value, value: option4.id },
			],
		};

		quiz.push(questionItem);

		dispatch(Reset());

		dispatch({
			type: QUIZE_CREATOR_ADD_QUESTION,
			quiz,
		});
	};
};