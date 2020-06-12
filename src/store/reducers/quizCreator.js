import {
	createControl,
	validateForm,
	setControl,
} from "../../form/formFramework";

import {
	QUIZE_CREATOR_ERROR,
	QUIZE_CREATOR_RESET,
	QUIZE_CREATOR_SET_RIGHT_ANSWER_ID,
	QUIZE_CREATOR_ADD_QUESTION,
	QUIZE_CREATOR_CHANGE,
} from "../actions/actionsTypes";

const createOptionControl = (number) =>
	createControl(
		{
			id: number,
			label: `Вопрос ${number}`,
			errorMessage: "Вопрос не может быть пустым",
		},
		{ required: true }
	);

const createFormControls = () => ({
	question: createControl(
		{
			label: "Введите вопрос",
			errorMessage: "Вопрос не может быть пустым",
		},
		{ required: true }
	),
	option1: createOptionControl(1),
	option2: createOptionControl(2),
	option3: createOptionControl(3),
	option4: createOptionControl(4),
});

const initialState = {
	quiz: [],
	rightAnswerId: 1,
	isFormValid: false,
	formControls: createFormControls(),
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
				rightAnswerId: 1,
				isFormValid: false,
				formControls: createFormControls(),
			};
		case QUIZE_CREATOR_SET_RIGHT_ANSWER_ID:
			return {
				...state,
				rightAnswerId: Number(action.id),
			};
		case QUIZE_CREATOR_ADD_QUESTION:
			return {
				...state,
				quiz: action.quiz,
			};
		case QUIZE_CREATOR_CHANGE:
			const formControls = {
				...state.formControls,
				[action.controlName]: setControl(action.value, {
					...state.formControls[action.controlName],
				}),
			};
			return {
				...state,
				formControls,
				isFormValid: validateForm(formControls),
			};
		default:
			return state;
	}
};
