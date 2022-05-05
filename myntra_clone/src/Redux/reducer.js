import { FETCH_DATA, HANDLE_SINGLE_DATA, SORT } from "./action"

const initialState = {
    singleData:[],
    item:[]
}
export const reducer = (state = initialState,action) =>{
    console.log(action,"action")
    // const payload = action.paylaod
    switch(action.type){

        case FETCH_DATA :{
            // console.log("state.item" , state)
            return {
                ...state,
                item:action.payload
            }
        }
        case SORT :{
            console.log(state,"state")
            return {
                ...state,
                item:[...state.item].sort((a,b)=>b.discountRate - a.discountRate)
            }
        }
        case HANDLE_SINGLE_DATA :{
            return{
                ...state,
                singleData:[...state.item].filter((item)=> item.id === action.payload)
            }
        }
        
        default :
          return  state

    }
}