import React from 'react'
import { Outlet,Link } from 'react-router-dom'
function Products() {
  return (
    <div>
        
        <h1>View Our Products</h1>
        <nav>
            <Link to="wines">Wines</Link>
            <Link to="beers">Beers</Link>
        </nav>

        <Outlet/>

    </div>
  )
}

export default Products