
import {configureStore} from "@reduxjs/toolkit";
import filtersSlice from "../components/content/filterSlice"
import productsSlice from "../components/content/productsSlice";
import orderSlice from "../components/order-sidebar/orderSlice";
import userSlice from "../components/settings/content-settings/userSlice";


const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        products: productsSlice.reducer,
        orders: orderSlice.reducer,
        users: userSlice.reducer
    }
})

export default store;