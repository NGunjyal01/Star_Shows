import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
        showSearchBar: null,
        showGenreOptions: null,
    },
    reducers: {
        changeLanguage: (state,action) =>{
            state.lang = action.payload;
        },
        toggleShowSearchBar: (state,action) =>{
            state.showSearchBar = action.payload;
        },
        toggleShowGenreOptions: (state,action) =>{
            state.showGenreOptions = action.payload;
        },
    },
});

export const { changeLanguage,toggleShowSearchBar,toggleShowGenreOptions } = configSlice.actions;

export default configSlice.reducer;