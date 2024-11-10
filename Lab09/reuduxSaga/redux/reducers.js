import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE,
    ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, 
    UPDATE_TODO_FAILURE, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS, 
    DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS
 } from "./actions";

const initialState = {
    todos: [],
    loading: false,
    error: null,
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        // Fetch todos
        case FETCH_TODOS_REQUEST:
            return { ...state, loading: true, error: null};
        case FETCH_TODOS_SUCCESS:
            return { ...state, loading: false, todos: action.payload}; 
        case FETCH_TODOS_FAILURE:
            return { ...state, loading: false, error: action.payload};

        // Add todo
        case ADD_TODO_REQUEST:
            return { ...state, loading: true, error: null};
        case ADD_TODO_SUCCESS:
            return { ...state, loading: false, todos: [...state.todos, action.payload]};
        case ADD_TODO_FAILURE:
            return { ...state, loading: false, error: action.payload};

        // Update todo
        case UPDATE_TODO_REQUEST:
            return { ...state, loading: true, error: null};
        case UPDATE_TODO_SUCCESS:
            return { ...state, loading: false, todos: action.payload};
        case UPDATE_TODO_FAILURE:
            return { ...state, loading: false, error: action.payload};

        // Delete todo
        case DELETE_TODO_REQUEST:
            return { ...state, loading: true, error: null};
        case DELETE_TODO_SUCCESS:
            return { ...state, loading: false, todos: action.payload};
        case DELETE_TODO_FAILURE:
            return { ...state, loading: false, error: action.payload};

        default:
            return state;
    }
}

export default todoReducer;