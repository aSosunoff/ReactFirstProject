import { combineReducers } from 'redux';
import quizList from './quizList';
import quiz from './quiz';
import quizCreator from './quizCreator';
import auth from './auth';

export default combineReducers({
    quizList,
    quiz,
    quizCreator,
    auth,
});