import { createSelector } from "@reduxjs/toolkit";

const selectorSearchFilter = (state) => state.filters.search
const selectorHandleFilter = (state) => state.filters.handle
const selectorSelectFilter = (state) => state.filters.select
const selectorListProduct = (state) => state.products

export const selectRemainingListProduct = createSelector(selectorListProduct, selectorSearchFilter, selectorHandleFilter, selectorSelectFilter, (products, search, handle, select) => {
    return products
})