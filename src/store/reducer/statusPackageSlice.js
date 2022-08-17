import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "",
    packageHailing: null,
};

export const statusPackageSlice = createSlice({
    name: "statusPackage",
    initialState,
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setPackageHailing: (state, action) => {
            state.packageHailing = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setStatus, setPackageHailing } = statusPackageSlice.actions;

export default statusPackageSlice.reducer;
