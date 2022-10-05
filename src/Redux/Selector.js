export const Selector = {
    Admin: {
        SelectorAdmin: (state) => state.AdminSlice.LoginAdmin,
    },
    User: {

    },
    Images: {
        SelectorImageCarousel: (state) => state.ImageSlice.Carousel
    },
    Error: {
        SelectorError: (state) => state.ErrorSlice.ERROR
    },
    Maintenance: {
        SelectorMaintenance: (state) => state.MaintenanceSlice.Maintenance
    }
}