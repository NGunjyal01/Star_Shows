import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        mainMovieId: null,
    },
    reducers: {
        addNowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) =>{
            state.popularMovies = action.payload;
        },
        addTraierVideo: (state,action) =>{
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies: (state,action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state,action) =>{
            state.upComingMovies = action.payload;
        },
        addMainMovieId: (state,action) =>{
            state.mainMovieId = action.payload;
        },
    },
});

export const { addNowPlayingMovies,addTraierVideo,addPopularMovies,addTopRatedMovies,addUpComingMovies,addMainMovieId } = moviesSlice.actions;
export default moviesSlice.reducer;