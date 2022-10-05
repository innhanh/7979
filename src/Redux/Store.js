//Redux Toolkit
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AdminSlice from "./Slice/AdminSlice";
import ErrorSlice from "./Slice/ErrorSlice";
import ImageSlice from "./Slice/ImageSlice";
import MaintenanceSlice from "./Slice/MaintenanceSlice";
import UserSlice from "./Slice/UserSlice";

export const MenuDashboard = [
    {
        menu: "Dashboard",
        icon: "fa fa-align-justify",
        item: []
    },
    {
        menu: "Thống Kê",
        icon: "fa fa-chart-bar",
        item: []
    },
    {
        menu: "Quản Lý",
        icon: "fa fa-user-cog",
        item: ["Đơn Hàng", "Tồn Kho", "Khách Hàng", "Nhân Viên"]
    },
    {
        menu: "Cài Đặt",
        icon: "fa fa-cogs bar-icon",
        item: ["Theme", "Kho Ảnh", "Cá Nhân"]
    }
]

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};
const rootReducer = combineReducers({
    AdminSlice: AdminSlice.reducer,
    UserSlice: UserSlice.reducer,
    ImageSlice: ImageSlice.reducer,
    ErrorSlice: ErrorSlice.reducer,
    MaintenanceSlice: MaintenanceSlice.reducer
});



const persistedReducer = persistReducer(persistConfig, rootReducer)

export const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(Store);



