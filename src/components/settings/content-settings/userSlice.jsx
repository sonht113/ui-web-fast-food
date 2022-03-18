import {createSlice} from "@reduxjs/toolkit";

export default createSlice({
    name: 'users',
    initialState: {
        currentUser: undefined
    },
    reducers: {
        updateUser: (state, action) => {
            state.currentUser = action.payload
            return void(state.currentUser)
        }
    }
})