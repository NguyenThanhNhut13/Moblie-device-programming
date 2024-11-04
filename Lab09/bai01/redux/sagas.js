import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_TODOS_REQUEST, ADD_TODO_REQUEST, UPDATE_TODO_REQUEST, DELETE_TODO_REQUEST,
    fetchTodoSuccess, fetchTodoFailure, addTodoSuccess, addTodoFailure, 
    updateTodoSuccess, updateTodoFailure, deleteTodoSuccess, deleteTodoFailure
 } from './actions';

const name = "Thanh Nhứt";

function* fetchTodos() {
    try {
        const response = yield call(() => axios.get('https://64598ce84eb3f674df924e51.mockapi.io/users?name=' + name));
        yield put(fetchTodoSuccess(response.data[0].jobs));
    } catch (error) {
        yield put(fetchTodoFailure(error));
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_TODOS_REQUEST, fetchTodos);
}

export default rootSaga;

