import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
    name: "genre",
    initialState: {
        movies: null,
        tvShows: null,
    },
    reducers: {
        addMovies: (state,action)=>{
            state.movies = action.payload;
        },
        addTVShows: (state,action)=>{
            state.tvShows = action.payload;
        },
    },
});

export const { addMovies,addTVShows } = genreSlice.actions;

export default genreSlice.reducer;