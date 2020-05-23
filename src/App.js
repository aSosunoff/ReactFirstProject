import React from "react";
import Layout from "./hoc/Layout";
import {Route, Switch} from 'react-router-dom';
import Auth from "./containers/Auth/";
import Quiz from "./containers/Quiz/";
import QuizCreator from "./containers/QuizCreator/";
import QuizList from "./containers/QuizList/";

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/auth" component={Auth} />
				<Route path="/quiz-creater" component={QuizCreator} />
				<Route path="/quiz/:id" component={Quiz} />
				<Route path="/" component={QuizList} />
			</Switch>
		</Layout>
	);
}

export default App;
