import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import GPTReducer from "./GPTSlice";
import configReducer from "./configSlice";
import mainMovieReducer from "./mainMovieSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        GPT: GPTReducer,
        config: configReducer,
        mainMovie: mainMovieReducer,
    },
});

export default appStore;