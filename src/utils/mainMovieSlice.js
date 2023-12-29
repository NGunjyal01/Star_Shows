import { createSlice } from "@reduxjs/toolkit";

const mainMovieSlice = createSlice({
    name: "mainMovie",
    initialState: {
        mainMovieId: null,
        mainMovieDetails: null,
    },
    reducers: {
        addMainMovieId: (state,action) =>{
            state.mainMovieId = action.payload;
        },
        removeMainMovieId: (state,action) =>{
            state.mainMovieId = null;
        },
        addMainMovieDetails: (state,action) =>{
            state.mainMovieDetails = action.payload;
        },
        removeMainMovieDetails: (state,action) =>{
            state.mainMovieDetails = null;
        },
    },
});


export const { addMainMovieId,removeMainMovieId,addMainMovieDetails,removeMainMovieDetails } = mainMovieSlice.actions;

export default mainMovieSlice.reducer;