import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "GPT",
    initialState: {
        showGPTSearch: false,
    },
    reducers: {
        toggleGPTSearch: (state) =>{
            state.showGPTSearch = !state.showGPTSearch;
        },
    },
});

export const { toggleGPTSearch } = GPTSlice.actions;

export default GPTSlice.reducer;