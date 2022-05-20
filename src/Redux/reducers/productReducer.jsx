import { PRODUCTS } from "../actions/produceAction"

const initialState={
    prod:[]
}
export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS:
            return {
                ...state,
                prod: action.payload
            }
 
        default:
            return state
    }
}