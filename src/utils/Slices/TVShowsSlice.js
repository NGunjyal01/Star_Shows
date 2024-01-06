import { createSlice } from "@reduxjs/toolkit";


const TVShowsSlice = createSlice({
    name: "TVShow",
    initialState: {
        airingTodayShows: null,
        onTheAirShows: null,
        popularShows: null,
        topRatedShows: null,
        trailerVideo: null,
    },
    reducers: {
        addAiringToadyShows: (state,action) =>{
            state.airingTodayShows = action.payload;
        },
        addOnTheAirShows: (state,action) =>{
            state.onTheAirShows = action.payload;
        },
        addPopularShows: (state,action) =>{
            state.popularShows = action.payload;
        },
        addTopRatedShows: (state,action) =>{
            state.topRatedShows = action.payload;
        },
        addTrailerVideo: (state,action) =>{
            state.trailerVideo = action.payload;
        },
    },
});

export const { addAiringToadyShows,addOnTheAirShows,addPopularShows,addTopRatedShows,addTrailerVideo } = TVShowsSlice.actions;

export default TVShowsSlice.reducer;