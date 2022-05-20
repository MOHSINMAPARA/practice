import React from 'react'
import {  useSelector } from 'react-redux'


function ProductComponent() {


const prod = useSelector(state => state.productCombineReducer.prod)
  return (
    <div>

    </div>
  )
}

export default ProductComponent