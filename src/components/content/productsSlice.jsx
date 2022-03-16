import {createSlice} from "@reduxjs/toolkit";

export default createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
            // console.log(state.products)
        }
    }
})