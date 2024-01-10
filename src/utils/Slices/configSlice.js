import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
        showSearchBar: null,
    },
    reducers: {
        changeLanguage: (state,action) =>{
            state.lang = action.payload;
        },
        toggleShowSearchBar: (state,action) =>{
            state.showSearchBar = action.payload;
        },
    },
});

export const { changeLanguage,toggleShowSearchBar } = configSlice.actions;

export default configSlice.reducer;