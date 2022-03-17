import {createSlice} from "@reduxjs/toolkit";

export default createSlice({
    name: 'actives',
    initialState: {
        active: ''
    },
    reducers: {
        changeActive: (state, action) => {
            if(state.active === action.payload) {
                state.active = ''
            }else {
                state.active = action.payload
            }
        }
    }
})