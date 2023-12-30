import { createSlice } from "@reduxjs/toolkit";

const mainMovieSlice = createSlice({
    name: "mainMovie",
    initialState: {
        mainMovieId: null,
        mainMovieDetails: null,
        mainMovieTrailer: null,
        mainMovieCast: null,
        movieRecommendations: null,
        similarMovies: null,
    },
    reducers: {
        addMainMovieId: (state,action) =>{
            state.mainMovieId = action.payload;
        },
        removeMainMovieId: (state) =>{
            state.mainMovieId = null;
        },
        addMainMovieDetails: (state,action) =>{
            state.mainMovieDetails = action.payload;
        },
        removeMainMovieDetails: (state) =>{
            state.mainMovieDetails = null;
        },
        addMainMovieTrailer: (state,action) =>{
            state.mainMovieTrailer = action.payload;
        },
        addmainMovieCast: (state,action) =>{
            state.mainMovieCast = action.payload;
        },
        addMovieRecommendations: (state,action) =>{
            state.movieRecommendations = action.payload;
        },
        addSimilarMovies: (state,action) =>{
            state.similarMovies = action.payload;
        }
    },
});


export const { addMainMovieId,removeMainMovieId,addMainMovieDetails,removeMainMovieDetails,addMainMovieTrailer,addmainMovieCast,addMovieRecommendations,addSimilarMovies } = mainMovieSlice.actions;

export default mainMovieSlice.reducer;