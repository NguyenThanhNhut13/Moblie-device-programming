// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// // const URL_API = "https://6457b5721a4c152cf98861de.mockapi.io/api/ck/bikes";

// // const fetchBikes = createAsyncThunk('fetchBikes', async () => {
// //     try {
// //         const response = await axios.get(`${URL_API}`)
// //         return response.data;
// //     } catch (error) {
// //         console.log(error)
// //     }
// // })

// const BikeSlice = createSlice({
//     name: "bikes",
//     initialState: {
//         bikes: [],
//     },
//     reducers: {

//     },
//     // extraReducers: (builder) => {
//     //     builder.addCase(fetchBikes.fulfilled, (state, action) => {
//     //         state.bikes = action.payload;
//     //     })
//     // }
// })

// export default BikeSlice.reducer;