import { CartPage } from "../Components/Pages/CartPage"
import { CART, FETCH_DATA, GET_ADDRESS, HANDLE_SINGLE_DATA, REMOVE_DATA_FROM_CART, SORT, SORT_BY_BRAND } from "./action"

const initialState = {
    storingData:[],
    singleData:[],
    item:[],
    cart:[],
    sortBycheckBox:[],
    address:[]
}
export const reducer = (state = initialState,{type, payload}) =>{
    switch(type){

        case FETCH_DATA :{
            return {
                ...state,
                item:payload,
                storingData:payload
            }
        }
        case SORT :{
            console.log("state",payload)
            if((payload === "ratings") || (payload === "discountRate")){
                return {
                    ...state,
                    item:[...state.item].sort((a,b)=>a[payload] < b[payload] ? 1 : a[payload] > b[payload] ? -1 : 0)
                }
            } else if(payload === "sortByrecommended"){
                return {
                    ...state,
                    item:[...state.storingData]
                }
            }
             else  {
                if(payload === "lowToHigh"){
                    payload = "discountRate"
                }
                return {
                    ...state,
                    item:[...state.item].sort((a,b)=>a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0)
                }
            }
            
        }
        case HANDLE_SINGLE_DATA :{
            return{
                ...state,
                singleData:[...state.item].filter((item)=> item.id === payload)
            }
        }
        case CART :{
            return{
                ...state,
                cart:[...state.cart,payload]
            }
        }
        case SORT_BY_BRAND :{
            return{
                ...state,
                item:[...state.item].filter((item)=> item.gender === payload)
            }
        }
        case GET_ADDRESS :{
            console.log("raja",payload)
            return{
                ...state,
                address:payload
            }
        }
        case REMOVE_DATA_FROM_CART : {
            return {
                ...state,
                cart:[...state.cart].filter((item)=>item.id !== payload)
            }
        }
        default :
        return  state

    }
}