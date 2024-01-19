import React,{useState} from 'react'
import { Outlet,Link } from 'react-router-dom'
import "../styles/products-page.css"

function Products() {

const[clicked,setclicked]=useState(false)

  
  return (



    
    <div id="products-page">
        

      
        <h1><em>Choose from our fine assortment of products</em></h1>
        
        <img id="red-wine" src="./images/red-wine.jpg"/>

        <br/>

      <nav id="product-nav">
            <Link onClick={()=>setclicked(true)} to="wines">See our Wines</Link>
            <Link onClick={()=>setclicked(true)} to="beers">See our Beers</Link>
        </nav>

      <br/>
       
     <h1 style={{display: !clicked ? "block" : "none"}}><em>Let our beverages fuel your spirit</em></h1>
        <img id="celebration" style={{display: !clicked ? "block" : "none"}} src="./images/celebration.jpg" alt="celebrating"/>:"" 
        
        

        <Outlet/>

    </div>
  )
}

export default Products