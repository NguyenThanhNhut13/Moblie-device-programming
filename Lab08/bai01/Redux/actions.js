import { Alert } from "react-native";

const url = "https://64598ce84eb3f674df924e51.mockapi.io/users";
const name = "Thanh Nhứt";

export const setTodos = (todos) => ({
    type: 'SET_TODO',
    payload: todos,
})

export const fetchTodos = () => async (dispatch) => {
    try {
        const todos = await getByName(name);
        dispatch(setTodos(todos.jobs));
    } catch (error) {
        console.log("Error fetching todos: ", error);
    }
}

export const addTodo = (todo) => async (dispatch) => {
    try {
        const userData = await getByName(name);
        
        if (!userData || !userData.id) {
            throw new Error('User not found');
        }

        if (userData.jobs.includes(todo)) {
            Alert.alert('Todo already exists');
            return;
        }

        const updatedJobs = [...userData.jobs, todo];

        const updateResponse = await fetch(`${url}/${userData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...userData,
                jobs: updatedJobs,
            }),
        });

        dispatch({
            type: 'ADD_TODO',
            payload: todo,
        });
    } catch (error) {
        console.log("Error adding todo: ", error);
    }
}

export const updateTodo = (oldJob, newJob) => async (dispatch) => {
    try {
        const userData = await getByName(name);

        if (!userData || !userData.id) {
            throw new Error('User not found');
        }

        const updatedJobs = userData.jobs.map(job => job === oldJob ? newJob : job);

        const updateResponse = await fetch(`${url}/${userData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...userData,
                jobs: updatedJobs,
            }),
        });

        dispatch({
            type: 'UPDATE_TODO',
            payload: updatedJobs,
        });
    } catch (error) {
        console.log("Error updating todo: ", error);
    }
}

export const deleteTodo = (todo) => async (dispatch) => {
    try {
        const userData = await getByName(name);

        if (!userData || !userData.id) {
            throw new Error('User not found');
        }

        const updatedJobs = userData.jobs.filter(job => job !== todo);
        
        const updateResponse = await fetch(`${url}/${userData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...userData,
                jobs: updatedJobs,
            }),
        });
        
        dispatch({
            type: 'DELETE_TODO',
            payload: updatedJobs,
        });

    } catch (error) {
        console.log("Error deleting todo: ", error);
    }
}

const getByName = async (name) => {
    try {
      const response = await fetch(`${url}?name=${name}`);
      const jsonData = await response.json();
      return jsonData[0];
    } catch (error) {
        throw new Error('User not found');
    }
  }



