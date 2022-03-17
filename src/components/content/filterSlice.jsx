import {createSlice} from "@reduxjs/toolkit";

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        handle: '',
        select: 'All'
    },
    reducers: {
        searchFilter: (state, action) => {
            state.search = action.payload
        },
        handleFilter: (state, action) => {
            if(action.payload === state.handle) {
                return void(state.handle = '')
            } else {
                return void(state.handle = action.payload)
            }
        },
        selectFilter: (state, action) => {
            state.select = action.payload
        }
    }
})