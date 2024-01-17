import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import "../styles/products-page.css"
function Products() {



  
  return (



    
    <div id="products-page">
        

      
        <h1>Choose from our fine assortment of products</h1>
        
        <img id="red-wine" src="./images/red-wine.jpg"/>

      


        <nav id="product-nav">
            <Link to="wines">See our Wines</Link>
            <Link to="beers">See our Beers</Link>
        </nav>

        <br/><br/>

        <Outlet/>

    </div>
  )
}

export default Products