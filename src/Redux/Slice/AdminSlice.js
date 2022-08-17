import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
    name: "admin",
    initialState: {
        ImageCarousel: [],
        LoginAdmin: []
    },
    reducers: {
        loginAdminSuccess: (state, actions) => {
            state.LoginAdmin = actions.payload;
        },
        logoutSuccess: (state) => {
            state.LoginAdmin = [];
            state.ImageCarousel = [];
        },
        imageCarouselSuccess: (state, actions) => {
            state.ImageCarousel = actions.payload;
        }
    }
});
export const {
    loginAdminSuccess,
    logoutSuccess,
    imageCarouselSuccess
} = AdminSlice.actions;

export default AdminSlice;