const fetchRequested = () => {
    return{
        type: 'REQUESTED'
    }
}

const fetchLoaded = (data) => {
    return {
        type: 'LOADED',
        payload: data
    }
}

const fetchError = (error) => {
    return{
        type: 'ERROR',
        payload: error
    }
}

const onItemSelected = (item) => {
    return{
        type: 'ITEM_SELECTED',
        payload: item
    }
}

const onPageChange = (page) => {
    return{
        type: 'PAGE_CHANGE',
        payload: page
    }
}

const onFilterChange = (value, field) => {
    return{
        type: 'FILTER_CHANGE',
        payload: {
            value,
            field
        }
    }
}

const fetchData = (service, dispatch) => (page,field,value) => {
    dispatch(fetchRequested());
    service(page,field,value)
        .then((data) => dispatch(fetchLoaded(data)))
        .catch((error) => dispatch(fetchError(error)))
}

export{
    fetchData,
    onItemSelected,
    onPageChange,
    onFilterChange
}