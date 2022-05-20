import { combineReducers } from 'redux'
import counterReducer from "./countReducer";
import productReducer from  "./productReducer"



export const mainReducer = combineReducers({ counterXYZ: counterReducer, productCombineReducer: productReducer })

