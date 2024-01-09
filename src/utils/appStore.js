import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import moviesReducer from "./Slices/moviesSlice";
import GPTReducer from "./Slices/GPTSlice";
import configReducer from "./Slices/configSlice";
import mainMovieReducer from "./Slices/mainMovieSlice";
import TVShowsReducer from "./Slices/TVShowsSlice";
import mainTVShowReducer from "./Slices/mainTVShowSlice";
import genreReducer from "./Slices/genreSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        GPT: GPTReducer,
        config: configReducer,
        mainMovie: mainMovieReducer,
        tvShows: TVShowsReducer,
        mainTVShow: mainTVShowReducer,
        genre: genreReducer,
    },
});

export default appStore;