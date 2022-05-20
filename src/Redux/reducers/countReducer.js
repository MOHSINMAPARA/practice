import { INCREMENT } from "../actions/counterAction"

const initState = {
    count: 0
}

export default function counterReducer(state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: action.payload
            }
 
        default:
            return state
    }
}
