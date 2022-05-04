import { FETCH_DATA, SORT } from "./action"

const initialState = {
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
        
        default :
          return  state

    }
}