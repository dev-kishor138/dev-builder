import { configureStore } from "@reduxjs/toolkit";
import mainDashboardApiSlice from "./features/api/mainDashboardApiSlice";
import assetDashboardApiSlice from "./features/api/assetDashboardApiSlice";

const store = configureStore({
    reducer: {
        [mainDashboardApiSlice.reducerPath]: mainDashboardApiSlice.reducer,
        [assetDashboardApiSlice.reducerPath]: assetDashboardApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainDashboardApiSlice.middleware).concat(assetDashboardApiSlice.middleware),
})

export default store;
