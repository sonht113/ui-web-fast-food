export const searchFilter = (data) => {
    return {
        type: 'filters/searchFilter',
        payload: data
    }
}

export const handleFilter = (data) => {
    return {
        type: 'filters/handleFilter',
        payload: data
    }
}

export const selectFilter = (data) => {
    return {
        type: 'filters/selectFilter',
        payload: data
    }
}