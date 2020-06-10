import axios from "../../utils/axios";
import {
	QUIZE_LIST_START,
	QUIZE_LIST_SUCCESS,
	QUIZE_LIST_ERROR,
} from "./actionsTypes";

export const loadQuizes = () => {
	return async (dispatch) => {
		try {
			dispatch(Start());
			const { data: list } = await axios.get("quiz/list");
			dispatch(Success(list));
		} catch (error) {
			dispatch(Error(error));
		}
	};
};

export const Start = () => {
	return {
		type: QUIZE_LIST_START,
	};
};

export const Success = (list) => {
	return {
		type: QUIZE_LIST_SUCCESS,
		list,
	};
};

export const Error = (error) => {
	return {
		type: QUIZE_LIST_ERROR,
		error,
	};
};
