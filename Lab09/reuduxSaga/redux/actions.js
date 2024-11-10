// actionTypes.js
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

// actions.js

// Fetch todos
export const fetchTodoRequest = () => ({
    type: FETCH_TODOS_REQUEST,
});

export const fetchTodoSuccess = (todos) => ({
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
});

export const fetchTodoFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    payload: error,
});

// Add todo
export const addTodoRequest = (todo) => ({
    type: ADD_TODO_REQUEST,
    payload: todo,
});

export const addTodoSuccess = (todo) => ({
    type: ADD_TODO_SUCCESS,
    payload: todo,
});

export const addTodoFailure = (error) => ({
    type: ADD_TODO_FAILURE,
    payload: error,
});

// Update todo

export const updateTodoRequest = (oldJob, newJob) => ({
    type: UPDATE_TODO_REQUEST,
    payload: {oldJob, newJob},
});

export const updateTodoSuccess = (todos) => ({
    type: UPDATE_TODO_SUCCESS,
    payload: todos,
});

export const updateTodoFailure = (error) => ({
    type: UPDATE_TODO_FAILURE,
    payload: error,
});


// Delete todo
export const deleteTodoRequest = (todo) => ({
    type: DELETE_TODO_REQUEST,
    payload: todo,
});

export const deleteTodoSuccess = (todos) => ({
    type: DELETE_TODO_SUCCESS,
    payload: todos,
});

export const deleteTodoFailure = (error) => ({
    type: DELETE_TODO_FAILURE,
    payload: error,
});

