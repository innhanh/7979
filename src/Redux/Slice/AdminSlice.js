import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
    name: "admin",
    initialState: {
        ImageCarousel: []
    },
    reducers: {
        imageCarouselSuccess: (state, actions) => {
            state.ImageCarousel = [...actions.payload]
        }
    }
});
export const {
    imageCarouselSuccess
} = AdminSlice.actions;

export default AdminSlice;