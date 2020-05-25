import React from "react";
import classes from "./index.module.css";
import Button from "../../components/UI/Button/";
import { createControl } from "../../form/formFramework";
import Input from "../../components/UI/Input/";

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

export default class extends React.Component {
	state = {
		quiz: [],
		formControls: createFormControls(),
	};

	submitHandler = (event) => {
		event.preventDefault();
	};

	addQuestionHandler = () => {};

	createQuizHandler = () => {};

	onChangeHandler = (value, controlName) => {};

	renderControls() {
		return Object.entries(this.state.formControls).map(
			(
				[
					controlName,
					{ id, label, value, errorMessage, valid, touched, validation },
				],
				index
			) => {
				return (
					<React.Fragment key={index}>
						<Input
							label={label}
							value={value}
							errorMessage={errorMessage}
							valid={valid}
							touched={touched}
							shouldValidate={Boolean(validation)}
							onChange={(event) =>
								this.onChangeHandler(event.target.value, controlName)
							}
						/>

						{index === 0 ? <hr /> : null}
					</React.Fragment>
				);
			}
		);
	}

	render() {
		return (
			<div className={classes.quizCreator}>
				<div>
					<h1>Создание теста</h1>

					<form onSubmit={this.submitHandler}>
						{this.renderControls()}

						<select></select>

						<Button type="primary" onClick={this.addQuestionHandler}>
							Добавить вопрос
						</Button>
						<Button type="success" onClick={this.createQuizHandler}>
							Создать тест
						</Button>
					</form>
				</div>
			</div>
		);
	}
}
