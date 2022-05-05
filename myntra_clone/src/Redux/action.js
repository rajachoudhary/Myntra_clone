export const GET_ALL_DATA = "GET_ALL_DATA"
export const FETCH_DATA = "FETCH_DATA"
export const SORT = "SORT"
export const HANDLE_SINGLE_DATA = "HANDLE_SINGLE_DATA"
export const HANDLE_SINGLE_FETCH_DATA = "HANDLE_SINGLE_FETCH_DATA"


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



export const getAllData = (params)=>(dispatch)=>{
    return(
        fetch(`http://localhost:3000/data?q=${params}`)
        .then((response) => response.json())
        .then((data) => {
            dispatch(fetchData(data))
        })
    )
}

