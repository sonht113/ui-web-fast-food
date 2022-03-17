
import {configureStore} from "@reduxjs/toolkit";
import filtersSlice from "../components/content/filterSlice"
import productsSlice from "../components/content/productsSlice";


const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        products: productsSlice.reducer
    }
})

export default store;