import { createSlice } from "@reduxjs/toolkit";

const ErrorSlice = createSlice({
    name: "errors",
    initialState: {
        ERROR: false
    },
    reducers: {
        CheckErrSuccess: (state, actions) => {
            state.ERROR = actions.payload;
        },
    }
});
export const {
    CheckErrSuccess
} = ErrorSlice.actions;

export default ErrorSlice;