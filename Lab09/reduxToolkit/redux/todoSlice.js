import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const name = "Thanh Nhứt";

const fetchTodo = createAsyncThunk('todos/fetchTodo', async () => {
    const response = await axios.get('https://64598ce84eb3f674df924e51.mockapi.io/users?name=' + name);
    return response.data[0].jobs;
})

const addTodo = createAsyncThunk('todos/addTodo', async (job) => {
    const responseUser = await axios.get('https://64598ce84eb3f674df924e51.mockapi.io/users?name=' + name);
    const user = responseUser.data[0];
    if (user && user.id) {
        user.jobs.push(job);
    }
    const jobs = user.jobs;
    await axios.put('https://64598ce84eb3f674df924e51.mockapi.io/users/' + user.id, { jobs });
    return job;
})

const updateTodo = createAsyncThunk('todos/updateTodo', async ({oldJob, newJob}) => {
    const responseUser = await axios.get('https://64598ce84eb3f674df924e51.mockapi.io/users?name=' + name);
    const user = responseUser.data[0];
    if (user && user.id) {
        user.jobs = user.jobs.map(job => job === oldJob ? newJob : job);
    }
    const jobs = user.jobs;
    await axios.put('https://64598ce84eb3f674df924e51.mockapi.io/users/' + user.id, { jobs });
    return {oldJob, newJob};
})

const deleteTodo = createAsyncThunk('todos/deleteTodo', async (job) => {
    const responseUser = await axios.get('https://64598ce84eb3f674df924e51.mockapi.io/users?name=' + name);
    const user = responseUser.data[0];
    if (user && user.id) {
        user.jobs = user.jobs.filter(j => j !== job);
    }
    const jobs = user.jobs;
    await axios.put('https://64598ce84eb3f674df924e51.mockapi.io/users/' + user.id, { jobs });
    return job;
})



const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.todos = action.payload;
        })
        .addCase(addTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload);
        })
        .addCase(updateTodo.fulfilled, (state, action) => {
            state.todos = state.todos.map(todo => todo === action.payload.oldJob ? action.payload.newJob : todo);
        })
        .addCase(deleteTodo.fulfilled, (state, action) => {
            state.todos = state.todos.filter(todo => todo !== action.payload);
        })
    }
})

export default todoSlice.reducer;
export { fetchTodo, addTodo, updateTodo, deleteTodo };