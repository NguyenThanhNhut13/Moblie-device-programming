import useApi from '../hook/useApi';

// const {getByName} = useApi('https://64598ce84eb3f674df924e51.mockapi.io/users');

// export const fetchTodos = () => async (dispatch) => {
//     try {
//         const data = await getByName('Thanh Nhứt');
//         console.log(data);
//         dispatch(setTodos(data.jobs || []));
//     } catch (error) {
//         console.error('Failed to fetch todos:', error);
//     }
// };

export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
})

export const updateTodo = (todo) => ({
    type: 'UPDATE_TODO',
    payload: todo,
})

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id,
})

export const setTodos = (todos) => ({
    type: 'SET_TODO',
    payload: todos,
})

