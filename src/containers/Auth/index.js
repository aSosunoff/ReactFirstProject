import React from "react";
import classes from "./index.module.css";
import Button from "../../components/UI/Button/";
import Input from "../../components/UI/Input/";
import is from 'is_js';

export default class extends React.Component {
	state = {
		formConstrols: {
			email: {
				value: "",
				type: "email",
				label: "Email",
				errorMessage: "Введите корректный email",
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true,
				},
			},
			password: {
				value: "",
				type: "password",
				label: "Пароль",
				errorMessage: "Введите корректный пароль",
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 6,
				},
			},
		},
	};

	loginHandler = () => {};

	registerHandler = () => {};

	submitHandler = (event) => {
		event.preventDafault();
	};

	validateControl(value, validation) {
		if(!validation){
			return true;
		}

		let isValid = true;

		if(validation.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if(validation.email) {
			isValid = is.email(value) && isValid;
		}

		if(validation.minLength) {
			isValid = value.trim().length >= validation.minLength && isValid;
		}

		return isValid;
	}

	onChangeHandler = (event, controlName) => {
		console.log(controlName, event.target.value);

		const control = { ...this.state.formConstrols[controlName] };
		control.value = event.target.value;
		control.touched = true;
		control.valid = this.validateControl(control.value, control.validation);
		this.setState({
			formConstrols: { ...this.state.formConstrols, [controlName]: control },
		});
	};

	renderInputs() {
		return Object.entries(this.state.formConstrols).map(
			(
				[
					controlName,
					{ type, label, value, errorMessage, valid, touched, validation },
				],
				index
			) => {
				return (
					<Input
						key={controlName + index}
						type={type}
						label={label}
						value={value}
						errorMessage={errorMessage}
						valid={valid}
						touched={touched}
						shouldValidate={Boolean(validation)}
						onChange={(event) => this.onChangeHandler(event, controlName)}
					/>
				);
			}
		);
	}

	render() {
		return (
			<div className={classes.auth}>
				<div>
					<h1>Авторизация</h1>

					<form onSubmit={this.submitHandler} className={classes.authForm}>
						{this.renderInputs()}

						<Button type="success" onClick={this.loginHandler}>
							Войти
						</Button>
						<Button type="primary" onClick={this.registerHandler}>
							Зарегистрироваться
						</Button>
					</form>
				</div>
			</div>
		);
	}
}
