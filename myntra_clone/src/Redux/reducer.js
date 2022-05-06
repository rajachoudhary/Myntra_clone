import { CartPage } from "../Components/Pages/CartPage"
import { CART, FETCH_DATA, GET_ADDRESS, HANDLE_SINGLE_DATA, SORT, SORT_BY_BRAND } from "./action"

const initialState = {
    singleData:[],
    item:[],
    cart:[],
    sortBycheckBox:[],
    address:[]
}
export const reducer = (state = initialState,action) =>{
    switch(action.type){

        case FETCH_DATA :{
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
        case CART :{
            return{
                ...state,
                cart:[...state.cart,action.payload]
            }
        }
        case SORT_BY_BRAND :{
            return{
                ...state,
                item:[...state.item].filter((item)=> item.gender === action.payload)
            }
        }
        case GET_ADDRESS :{
            console.log("raja",action.payload)
            return{
                ...state,
                address:action.payload
            }
        }
        default :
        return  state

    }
}