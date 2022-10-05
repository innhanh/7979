import { createSlice } from "@reduxjs/toolkit";

const MaintenanceSlice = createSlice({
    name: "images",
    initialState: {
        Maintenance: false
    },
    reducers: {
        MaintenanceSuccess: (state, actions) => {
            state.Maintenance = actions.payload;
        },
    }
});
export const {
    MaintenanceSuccess
} = MaintenanceSlice.actions;

export default MaintenanceSlice;