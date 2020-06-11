import axios from "../../utils/axios";
import {
	QUIZE_START,
	QUIZE_SUCCESS,
	QUIZE_ERROR,
} from "./actionsTypes";

export const getQuizById = (id) => {
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
