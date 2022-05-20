import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import { ShoppingCartOutlined } from '@ant-design/icons';
import {  useSelector } from 'react-redux'
// import {increment} from '../Redux/actions/counterAction'

function NavBar() {
     const count = useSelector(state => state.counterXYZ.count)
     // const dispatch = useDispatch()

     return (
          <div>
               <ul className='NavBar'>
                    <li>
                         <NavLink className='linkOne' to="/Home">Home</NavLink>
                    </li>
                    <li>                     
                          <ShoppingCartOutlined className='Icon'/> 
                          <div className='count'>
                          {count}                    
                          </div>
                    </li>
               </ul>

          </div>





     )
}

export default NavBar