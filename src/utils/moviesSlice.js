import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTraierVideo: (state,action) =>{
            state.trailerVideo = action.payload;
        },
    },
});

export const {addNowPlayingMovies,addTraierVideo} = moviesSlice.actions;
export default moviesSlice.reducer;