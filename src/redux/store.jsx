
import {configureStore} from "@reduxjs/toolkit";
import filtersSlice from "../components/content/filterSlice"
import productsSlice from "../components/content/productsSlice";
import activeSlice from "../components/content/activeSlice";


const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        products: productsSlice.reducer,
        actives: activeSlice.reducer
    }
})

export default store;