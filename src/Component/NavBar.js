import React from 'react'
import { NavLink } from 'react-router-dom'

// import { Link } from 'react-router-dom'

// export const NavBar = () => {
//   return (
//  <nav>
//  <Link to='/'>Home</Link>
//  <Link to='/about'>About</Link>
//  </nav>
//   )
// }
const navLinkStyles =({isActive})=>{
return{
    fontWeight:isActive ? 'bold':'normal',
    textDecoration:isActive ?'none':'underline'


}
} 
export const NavBar = () => {
    return (
   <nav>
   <NavLink style={navLinkStyles} to='/'>Home</NavLink>
   <NavLink style={navLinkStyles} to='/about'>About</NavLink>
   <NavLink  style={navLinkStyles} to='products'>products</NavLink>
   </nav>
    )
  }
  
