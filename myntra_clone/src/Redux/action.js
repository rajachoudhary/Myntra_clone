// export const GET_ALL_DATA = "GET_ALL_DATA"
export const FETCH_DATA = "FETCH_DATA"
export const SORT = "SORT"
export const HANDLE_SINGLE_DATA = "HANDLE_SINGLE_DATA"
export const CART = "CART"
export const SORT_BY_BRAND = "SORT_BY_BRAND"
export const  GET_ADDRESS =  "GET_ADDRESS"
export const REMOVE_DATA_FROM_CART = "REMOVE_DATA_FROM_CART"

export const fetchData = (data)=>({
   type:FETCH_DATA,
    payload:data
})
export const  sort = (by)=>({
    type : SORT,
    payload : by
})
export const handleSingleData = (data)=>({
    type:HANDLE_SINGLE_DATA,
    payload:data
})

export const addToCart = (data) => ({
    type:CART,
    payload:data
})
export const sortByBrand = (data) => ({
    type:SORT_BY_BRAND,
    payload:data
})
export const getAddress = (data) =>({
    type:GET_ADDRESS,
    payload:data
})

export const removeDataFromCart = (data)=>({
    type:REMOVE_DATA_FROM_CART,
    payload : data
})



export const getAllData = (params)=>(dispatch)=>{
    return(
        fetch(`https://my-myntra-clone-api.herokuapp.com/data?q=${params}`)
        .then((response) => response.json())
        .then((data) => {
            dispatch(fetchData(data))
        })
    )
}
export const fetchAddress = ()=>{
    return(dispatch)=>{
        fetch(`https://my-myntra-clone-api.herokuapp.com/address`)
        .then((response) => response.json())
        .then((data) => 
            dispatch(getAddress(data))
        )
    }
}

