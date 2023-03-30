import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export const Product = () => {
    // <Link to='/products/featured'>Featured</Link> absolute link
  return (
    <>
    <div>
    <input type={'search'} placeholder='search product'/>
    <nav>
    <Link to='featured'>Featured</Link>
    
    <Link to='new'>new</Link>
    
    </nav>
    <Outlet/>
    </div>
    </>
  )
}
