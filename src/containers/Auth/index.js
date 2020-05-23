import React from "react";
import classes from "./index.module.css";
import Button from "../../components/UI/Button/";
import Input from "../../components/UI/Input/";

export default class extends React.Component {
	loginHandler = () => {};

	registerHandler = () => {};

	submitHandler = (event) => {
		event.preventDafault();
	};

	render() {
		return (
			<div className={classes.auth}>
				<div>
					<h1>Авторизация</h1>

					<form onSubmit={this.submitHandler} className={classes.authForm}>
						<Input label="Email" />
						<Input label="Пароль" errorMessage="Test"/>

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
