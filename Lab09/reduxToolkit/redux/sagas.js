import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_TODOS_REQUEST, ADD_TODO_REQUEST, UPDATE_TODO_REQUEST, DELETE_TODO_REQUEST,
    fetchTodoSuccess, fetchTodoFailure, addTodoSuccess, addTodoFailure, 
    updateTodoSuccess, updateTodoFailure, deleteTodoSuccess, deleteTodoFailure
 } from './actions';
import { act } from 'react';

const name = "Thanh Nhứt";

function* fetchTodos() {
    try {
        const response = yield call(() => axios.get('https://64598ce84eb3f674df924e51.mockapi.io/users?name=' + name));
        yield put(fetchTodoSuccess(response.data[0].jobs));
    } catch (error) {
        yield put(fetchTodoFailure(error));
    }
}

function* addTodo(action) {
    try {
        // Get user 
        const responseUser = yield call(() => axios.get('https://64598ce84eb3f674df924e51.mockapi.io/users?name=' + name));
        const user = responseUser.data[0];
        if (user && user.id) {
            user.jobs.push(action.payload);
        }
        const jobs = user.jobs;
        
        // Update jobs
        yield call(() => axios.put('https://64598ce84eb3f674df924e51.mockapi.io/users/' + user.id, {jobs}));
        yield put(addTodoSuccess(action.payload));
    } catch (error) {
        yield put(addTodoFailure(error));
    }
}

function* updateTodo(action) {
    try {
        // Get user 
        const responseUser = yield call(() => axios.get('https://64598ce84eb3f674df924e51.mockapi.io/users?name=' + name));
        const user = responseUser.data[0];
        if (user && user.id) {
            user.jobs = user.jobs.map(job => job === action.payload.oldJob ? action.payload.newJob : job);
        }
        const jobs = user.jobs;
        
        // Update jobs
        yield call(() => axios.put('https://64598ce84eb3f674df924e51.mockapi.io/users/' + user.id, {jobs}));
        yield put(updateTodoSuccess(jobs));
    } catch (error) {
        yield put(updateTodoFailure(error));
    }
}

function* deleteTodo(action) {
    try {
        // Get user 
        const responseUser = yield call(() => axios.get('https://64598ce84eb3f674df924e51.mockapi.io/users?name=' + name));
        const user = responseUser.data[0];
        if (user && user.id) {
            user.jobs = user.jobs.filter(job => job !== action.payload);
        }
        const jobs = user.jobs;
        
        // Update jobs
        yield call(() => axios.put('https://64598ce84eb3f674df924e51.mockapi.io/users/' + user.id, {jobs}));
        yield put(deleteTodoSuccess(jobs));
    } catch (error) {
        yield put(deleteTodoFailure(error));
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_TODOS_REQUEST, fetchTodos);
    yield takeEvery(ADD_TODO_REQUEST, addTodo);
    yield takeEvery(UPDATE_TODO_REQUEST, updateTodo);
    yield takeEvery(DELETE_TODO_REQUEST, deleteTodo);
}

export default rootSaga;

