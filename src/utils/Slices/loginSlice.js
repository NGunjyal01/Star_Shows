import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isSignIn: true,
    },
    reducers: {
        toggleIsSignIn: (state)=>{
            state.isSignIn = !state.isSignIn;
        },
    },
});

export const { toggleIsSignIn } = loginSlice.actions;
export default loginSlice.reducer;