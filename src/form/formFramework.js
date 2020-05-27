import is from "is_js";

export const createControl = (config, validation) => {
	return {
		...config,
		validation,
		valid: !validation,
		touched: false,
		value: "",
	};
};

export const validateControl = (value, validation = null) => {
	if (!validation) {
		return true;
	}

	let isValid = true;

	if (validation.required) {
		isValid = value.trim() !== "" && isValid;
	}

	if (validation.email) {
		isValid = is.email(value) && isValid;
	}

	if (validation.minLength) {
		isValid = value.trim().length >= validation.minLength && isValid;
	}

	return isValid;
};

export const validateForm = (formControls) => {
	return Object.entries(formControls).reduce((res, [, { valid }]) => {
		return valid && res;
	}, true);
};

export const setControl = (value, control) => {
	control.value = value;
	control.touched = true;
	control.valid = validateControl(control.value, control.validation);
	return control;
};
