import React from "react";
import classes from "./index.module.css";
import Button from "../../components/UI/Button/";
import Input from "../../components/UI/Input/";

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

	onChangeHandler = (event, controlName) => {
		console.log(controlName, event.target.value);
	}

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
