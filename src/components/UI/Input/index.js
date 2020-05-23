import React from "react";
import classes from "./index.module.css";

const isInvalid = ({ valid, touched, shouldValidate }) => {
	return !valid && shouldValidate && touched;
};

export default (props) => {
	const inputType = props.type || "text";
	const cls = [classes.input];
	const htmlFor = `${inputType}-${Math.random()}`;

	if (isInvalid(props)) {
		cls.push(classes.invalid);
	}

	return (
		<div className={cls.join(" ")}>
			<label htmlFor={htmlFor}>{props.label}</label>

			<input
				type={inputType}
				id={htmlFor}
				value={props.value}
				onChange={props.onChange}
			/>

			{isInvalid(props) ? (
				<span>{props.errorMessage || "Не корректный ввод"}</span>
			) : null}
		</div>
	);
};
