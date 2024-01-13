import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import "../styles/products.css"
function Products() {
  return (
    <div id="products-page">
        
        <h1>View Our Products</h1>
        <nav id="product-nav">
            <Link to="wines">Wines</Link>
            <Link to="beers">Beers</Link>
        </nav>

        <Outlet/>

    </div>
  )
}

export default Products