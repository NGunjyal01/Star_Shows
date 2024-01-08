import { createSlice } from "@reduxjs/toolkit";

const mainTVShowSlice = createSlice({
    name: "mainTVShow",
    initialState: {
        mainTVShowTrailer: null,
        mainTVShowDetails: null,
        mainTVShowCast: null,
        mainTVShowSeasonDetails: null,
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
    },
});

export const { addMainTVShowTrailer,addMainTVShowDetails,addMainTVShowCast,addMainTVShowSeasonDetails } = mainTVShowSlice.actions;

export default mainTVShowSlice.reducer;