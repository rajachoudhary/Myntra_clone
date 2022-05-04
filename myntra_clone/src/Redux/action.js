export const GET_ALL_DATA = "GET_ALL_DATA"
export const FETCH_DATA = "FETCH_DATA"
// export const LOW_TO_HIGH = "LOW_TO_HIGH"
// export const HIGH_TO_LOW =  "HIGH_TO_LOW"
export const SORT = "SORT"
export const fetchData = (data)=>(
    
    {
   type:FETCH_DATA,
    payload:data
})
export const  sort = (by)=>({
    type : SORT,
    payload : by
})
// export const highToLow = (data)=>({
//     type:HIGH_TO_LOW,
//     payoad:data
// })

// export const highToLowData =(params) =>(dispatch) =>{
//     return () =>{
//         fetch(`http://localhost:3000/data?q=${params}&_discountRate=asc`)
//         .then((response) => response.json())
//         .then((data) => dispatch(highToLow(data)));
//     }
// }

export const getAllData = (params)=>(dispatch)=>{
    return(
        // console.log("param",params),
        fetch(`http://localhost:3000/data?q=${params}`)
        .then((response) => response.json())
        
        .then((data) => {
            console.log("utaksrsh", data)
            dispatch(fetchData(data))
        })
    )
}

