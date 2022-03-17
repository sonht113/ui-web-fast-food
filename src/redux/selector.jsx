import { createSelector } from "@reduxjs/toolkit";

const selectorSearchFilter = (state) => state.filters.search
const selectorHandleFilter = (state) => state.filters.handle
const selectorSelectFilter = (state) => state.filters.select
const selectorListProduct = (state) => state.products

export const selectRemainingListProduct = createSelector(
    selectorListProduct,
    selectorSearchFilter,
    selectorHandleFilter,
    selectorSelectFilter,
    (products, search, handle, select) => {
    const listProduct = products.products
    const results = {
        products: listProduct,
        active: handle
    }

    if(select === "All") {
        if(handle === "") {
            results.products = listProduct.filter(product => product.name.includes(search))
            return results
        }else {
            results.products = listProduct.filter(product => {
                return (product.category === handle && product.name.includes(search))
            })
            return results
        }
    }else if(select === "New") {
        if(handle === "") {
            results.products = listProduct.filter(product => {
                return (product.new === true && product.name.includes(search))
            })
            return results
        }else {
            results.products =  listProduct.filter(product => {
                return (product.category === handle && product.new === true && product.name.includes(search))
            })
            return results
        }
    }else {
        if(handle === "") {
            results.products = listProduct.filter(product => {
                return (product.counter >= 5 && product.name.includes(search))
            })
            return results
        }else {
            results.products =  listProduct.filter(product => {
                return (product.category === handle && product.counter >=5 && product.name.includes(search))
            })
            return results
        }
    }
})
