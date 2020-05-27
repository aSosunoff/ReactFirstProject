import React from "react";
import classes from "./index.module.css";
import Button from "../../components/UI/Button/";
import { createControl, validateControl, validateForm } from "../../form/formFramework";
import Input from "../../components/UI/Input/";
import Select from "../../components/UI/Select/";

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
		rightAnswerId: 1,
		isFormValid: false,
		formControls: createFormControls(),
	};

	submitHandler = (event) => {
		event.preventDefault();
	};

	addQuestionHandler = (event) => {
		event.preventDefault();
	};

	createQuizHandler = (event) => {
		event.preventDefault();
	};

	onChangeHandler = (value, controlName) => {
		const control = { ...this.state.formControls[controlName] };
		control.value = value;
		control.touched = true;
		control.valid = validateControl(control.value, control.validation);
		const formControls = {
			...this.state.formControls,
			[controlName]: control,
		};
		this.setState({
			formControls,
			isFormValid: validateForm(formControls),
		});
	};

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

	selectChangeHandler = (event) => {
		this.setState({
			rightAnswerId: Number(event.target.value),
		});
	};

	render() {
		return (
			<div className={classes.quizCreator}>
				<div>
					<h1>Создание теста</h1>

					<form onSubmit={this.submitHandler}>
						{this.renderControls()}

						<Select
							label="Выберите правильный ответ"
							value={this.state.rightAnswerId}
							onChange={this.selectChangeHandler}
							options={[
								{ text: 1, value: 1 },
								{ text: 2, value: 2 },
								{ text: 3, value: 3 },
								{ text: 4, value: 4 },
							]}
						/>

						<Button type="primary" onClick={this.addQuestionHandler} disabled={!this.state.isFormValid}>
							Добавить вопрос
						</Button>
						<Button type="success" onClick={this.createQuizHandler} disabled={this.state.quiz.length === 0}>
							Создать тест
						</Button>
					</form>
				</div>
			</div>
		);
	}
}
