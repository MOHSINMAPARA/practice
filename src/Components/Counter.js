import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/actions/counterAction'

export default function Counter() {

  const count = useSelector(state => state.counterXYZ.count)
  
  const dispatch = useDispatch()

  return (
    <div style={{display:"flex",justifyContent:"center"}}>    
      <button onClick={() => dispatch(increment(count + 1))} >+</button> <br/> 
      {count}  
    </div>
  )
}