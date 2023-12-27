import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "GPT",
    initialState: {
        showGPTSearch: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleGPTSearch: (state) =>{
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGPTMoviesResult: (state,action) =>{
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    },
});

export const { toggleGPTSearch,addGPTMoviesResult } = GPTSlice.actions;

export default GPTSlice.reducer;