import React from "react";
import classes from "./index.module.css";
import Button from "../../components/UI/Button/";
import Input from "../../components/UI/Input/";
import Select from "../../components/UI/Select/";
import { connect } from "react-redux";
import {
	createControl,
	validateForm,
	setControl,
} from "../../form/formFramework";
import { QuizCreate, AddQuestion } from "../../store/actions/quizCreator";

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

class QuizCreator extends React.Component {
	state = {
		rightAnswerId: 1,
		isFormValid: false,
		formControls: createFormControls(),
	};

	ResetHandler = () => {
		this.setState({
			rightAnswerId: 1,
			isFormValid: false,
			formControls: createFormControls(),
		});
	}

	ChangeHandler = (value, controlName) => {
		const formControls = {
			...this.state.formControls,
			[controlName]: setControl(value, {
				...this.state.formControls[controlName],
			}),
		};

		this.setState({
			formControls,
			isFormValid: validateForm(formControls),
		});
	}

	SetRightAnswerIdHandler = (id) => {
		this.setState({
			rightAnswerId: Number(id),
		});
	}

	AddQuestionHandler = () => {
		const { question, option1, option2, option3, option4 } = this.state.formControls;

		const questionItem = {
			question: question.value,
			id: this.props.quiz.length + 1,
			rightAnswerId: this.state.rightAnswerId,
			answers: [
				{ text: option1.value, value: option1.id },
				{ text: option2.value, value: option2.id },
				{ text: option3.value, value: option3.id },
				{ text: option4.value, value: option4.id },
			],
		};

		this.props.AddQuestion(questionItem);
		this.ResetHandler();
	}

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
								this.ChangeHandler(event.target.value, controlName)
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

					<div className={classes.box}>
						{this.renderControls()}

						<Select
							label="Выберите правильный ответ"
							value={this.state.rightAnswerId}
							onChange={(event) =>
								this.SetRightAnswerIdHandler(event.target.value)
							}
							options={[
								{ text: 1, value: 1 },
								{ text: 2, value: 2 },
								{ text: 3, value: 3 },
								{ text: 4, value: 4 },
							]}
						/>

						<Button
							type="primary"
							onClick={this.AddQuestionHandler}
							disabled={!this.state.isFormValid}
						>
							Добавить вопрос
						</Button>
						<Button
							type="success"
							onClick={this.props.QuizCreate}
							disabled={this.props.quiz.length === 0}
						>
							Создать тест
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		quiz: state.quizCreator.quiz,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		QuizCreate: () => dispatch(QuizCreate()),
		AddQuestion: (questionItem) => dispatch(AddQuestion(questionItem)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator);
