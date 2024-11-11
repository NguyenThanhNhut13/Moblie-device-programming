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
    }
})

export default BikeSlice.reducer;
export { fetchBikes };  