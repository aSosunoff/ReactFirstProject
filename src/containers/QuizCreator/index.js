import React from "react";
import classes from "./index.module.css";
import Button from "../../components/UI/Button/";
import Input from "../../components/UI/Input/";
import Select from "../../components/UI/Select/";
import { connect } from "react-redux";
import {
	QuizCreate,
	SetRightAnswerId,
	AddQuestion,
	Change,
} from "../../store/actions/quizCreator";

class QuizCreator extends React.Component {
	renderControls() {
		return Object.entries(this.props.formControls).map(
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
								this.props.Change(event.target.value, controlName)
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
							value={this.props.rightAnswerId}
							onChange={(event) =>
								this.props.SetRightAnswerId(event.target.value)
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
							onClick={this.props.AddQuestion}
							disabled={!this.props.isFormValid}
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
		rightAnswerId: state.quizCreator.rightAnswerId,
		isFormValid: state.quizCreator.isFormValid,
		formControls: state.quizCreator.formControls,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		QuizCreate: () => dispatch(QuizCreate()),
		SetRightAnswerId: (id) => dispatch(SetRightAnswerId(id)),
		AddQuestion: () => dispatch(AddQuestion()),
		Change: (value, controlName) => dispatch(Change(value, controlName)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator);
