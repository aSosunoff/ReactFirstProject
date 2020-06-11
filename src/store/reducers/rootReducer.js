import { combineReducers } from 'redux';
import quizList from './quizList'
import quiz from './quiz'

export default combineReducers({
    quizList,
    quiz,
});