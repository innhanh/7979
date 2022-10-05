import { createSlice } from "@reduxjs/toolkit";

const ImageSlice = createSlice({
    name: "images",
    initialState: {
        Carousel: []
    },
    reducers: {
        CarouselSuccess: (state, actions) => {
            state.Carousel = actions.payload;
        },
    }
});
export const {
    CarouselSuccess
} = ImageSlice.actions;

export default ImageSlice;