import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL_API = "https://64598ce84eb3f674df924e51.mockapi.io/bikes";

const fetchBikes = createAsyncThunk('fetchBikes', async () => {
    try {
        const response = await axios.get(`${URL_API}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
})

const findByType = createAsyncThunk('findByType', async (type) => {
    try {
        const response = await axios.get(`${URL_API}?type=${type}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
})

const addBike = createAsyncThunk('addBike', async (bike) => {
    try {
        const response = await axios.post(`${URL_API}`, bike)
        return response.data;
    } catch (error) {
        console.log(error)
    }
})

const BikeSlice = createSlice({
    name: "bikes",
    initialState: {
        bikes: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchBikes.fulfilled, (state, action) => {
            state.bikes = action.payload;
        })
        .addCase(findByType.fulfilled, (state, action) => {
            state.bikes = action.payload;
        })
        .addCase(addBike.fulfilled, (state, action) => {
            state.bikes.push(action.payload);
        })

    }
})

export default BikeSlice.reducer;
export { fetchBikes, findByType, addBike };