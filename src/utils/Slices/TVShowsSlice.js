import { createSlice } from "@reduxjs/toolkit";


const TVShowsSlice = createSlice({
    name: "TVShow",
    initialState: {
        airingTodayShows: null,
        onTheAirShows: null,
        popularShows: null,
        topRatedShows: null,
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
    },
});

export const { addAiringToadyShows,addOnTheAirShows,addPopularShows,addTopRatedShows } = TVShowsSlice.actions;

export default TVShowsSlice.reducer;