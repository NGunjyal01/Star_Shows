import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Slices/loginSlice";
import userReducer from "./Slices/userSlice";
import moviesReducer from "./Slices/moviesSlice";
import GPTReducer from "./Slices/GPTSlice";
import configReducer from "./Slices/configSlice";
import mainMovieReducer from "./Slices/mainMovieSlice";
import TVShowsReducer from "./Slices/TVShowsSlice";
import mainTVShowReducer from "./Slices/mainTVShowSlice";
import genreReducer from "./Slices/genreSlice";
import watchlistReducer from "./Slices/WatchlistSlice";

const appStore = configureStore({
    reducer:{
        login: loginReducer,
        user: userReducer,
        movies: moviesReducer,
        GPT: GPTReducer,
        config: configReducer,
        mainMovie: mainMovieReducer,
        tvShows: TVShowsReducer,
        mainTVShow: mainTVShowReducer,
        genre: genreReducer,
        watchlist: watchlistReducer,
    },
});

export default appStore;