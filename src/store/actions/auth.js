import axios from "../../utils/axios";
import {
	QUIZE_AUTH_START,
	QUIZE_AUTH_ERROR,
	QUIZE_AUTH_SUCCESS,
} from "./actionsTypes";

export const Login = (email, password) => {
	return async (dispatch) => {
		try {
			dispatch(Start());

			const { data: auth } = await axios.post("/auth/login", {
				email,
				password,
			});

			console.log(auth);

			dispatch(Success());
		} catch (error) {
			dispatch(Error(error));
		}
	};
};

export const Register = (email, password) => {
	return async (dispatch) => {
		try {
			dispatch(Start());

			const { data: reg } = await axios.post("/auth/register", {
				email,
				password,
			});

			console.log(reg);

			dispatch(Success());
		} catch (error) {
			dispatch(Error(error));
		}
	};
};

export const Start = () => {
	return {
		type: QUIZE_AUTH_START,
	};
};

export const Success = () => {
	return {
		type: QUIZE_AUTH_SUCCESS,
	};
};

export const Error = (error) => {
	return {
		type: QUIZE_AUTH_ERROR,
		error,
	};
};