import { createSlice } from "@reduxjs/toolkit";

const WatchlistSlice = createSlice({
    name:"Watchlist",
    initialState: {
        movies: [],
        tvShows: [],
    },
    reducers: {
        addMovies: (state,action) =>{
            state.movies.push(action.payload);
        },
        addTVShows: (state,action) =>{
            state.tvShows.push(action.payload);
        },
        removeMovies: (state,action) =>{
            const index = state.movies.indexof(action.payload);
            if(index>-1){
                state.movies.splice(index,1);
            }
        },
        removeTVShows: (state,action) =>{
            const index = state.tvShows.indexof(action.payload);
            if(index>-1){
                state.tvShows.splice(index,1);
            }
        }
    },
});

export const { addMovies,addTVShows,removeMovies,removeTVShows } = WatchlistSlice.actions;
export default WatchlistSlice.reducer;