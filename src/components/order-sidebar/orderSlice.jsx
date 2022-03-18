import {createSlice} from "@reduxjs/toolkit";

export default createSlice({
    name: 'orders',
    initialState: {
        orderProducts: []
    },
    reducers: {
        addOrderProduct: (state, action) => {
            let index = state.orderProducts.findIndex((value) => value.product.id === action.payload.id)
            if(index > -1){
                state.orderProducts[index].counter ++
                state.orderProducts[index].priceTotal += action.payload.price
                return void(state.orderProducts)
            }
            return void(state.orderProducts.push({
                product: action.payload,
                counter: 1,
                priceTotal: action.payload.price
            }))
        },
        updateOrderProduct: (state, action) => {
            if(!action.payload.product) {
                state.orderProducts.splice(action.payload.index, 1)
                return void(state.orderProducts)
            }
            state.orderProducts[action.payload.index] = action.payload.product
            return void(state.orderProducts)
        },
        purchaseOrderProduct: (state, action) => {
            state.orderProducts = []
        }
    }
})