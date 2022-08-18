import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "ready",
};

export const statusDriverModeSlice = createSlice({
    name: "statusDriverMode",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setMode } = statusDriverModeSlice.actions;

export default statusDriverModeSlice.reducer;
