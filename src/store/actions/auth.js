import axios from "../../utils/axios";
import {
	QUIZE_AUTH_START,
	QUIZE_AUTH_ERROR,
	QUIZE_AUTH_SUCCESS,
	QUIZE_AUTH_LOGOUT,
} from "./actionsTypes";

export const Login = (email, password) => {
	return async (dispatch) => {
		try {
			dispatch(Start());

			const { data: auth } = await axios.post("/auth/login", {
				email,
				password,
			});

			/* localStorage.setItem('expires', auth.expires); */

			dispatch(Success(true));
			dispatch(autoLogout(auth.originalMaxAge));
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

			/* localStorage.setItem('expires', reg.expires); */

			dispatch(Success(true));
			dispatch(autoLogout(reg.originalMaxAge));
		} catch (error) {
			dispatch(Error(error));
		}
	};
};

export const logout = () => {
	/* localStorage.removeItem('expires'); */
	return {
		type: QUIZE_AUTH_LOGOUT,
	}
}

export const autoLogout = (originalMaxAge) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout());
		}, originalMaxAge);
	}
}

export const Start = () => {
	return {
		type: QUIZE_AUTH_START,
	};
};

export const Success = (authenticated) => {
	return {
		type: QUIZE_AUTH_SUCCESS,
		authenticated
	};
};

export const Error = (error) => {
	return {
		type: QUIZE_AUTH_ERROR,
		error,
	};
};