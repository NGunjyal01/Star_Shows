import { createSlice } from "@reduxjs/toolkit";

const mainTVShowSlice = createSlice({
    name: "mainTVShow",
    initialState: {
        mainTVShowTrailer: null,
        mainTVShowDetails: null,
        mainTVShowCast: null,
        mainTVShowSeasonDetails: null,
        similarTVShows: null,
        tvShowRecommendations: null,
    },
    reducers: {
        addMainTVShowTrailer: (state,action)=>{
            state.mainTVShowTrailer = action.payload;
        },
        addMainTVShowDetails: (state,action)=>{
            state.mainTVShowDetails = action.payload;
        },
        addMainTVShowCast: (state,action)=>{
            state.mainTVShowCast = action.payload;
        },
        addMainTVShowSeasonDetails: (state,action)=>{
            state.mainTVShowSeasonDetails = action.payload;
        },
        addSimilarTVShows: (state,action)=>{
            state.similarTVShows = action.payload;
        },
        addTVShowRecommendations: (state,action)=>{
            state.tvShowRecommendations = action.payload;
        },
    },
});

export const { addMainTVShowTrailer,addMainTVShowDetails,addMainTVShowCast,addMainTVShowSeasonDetails,addSimilarTVShows,addTVShowRecommendations } = mainTVShowSlice.actions;

export default mainTVShowSlice.reducer;