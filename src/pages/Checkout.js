import React, { useState } from 'react'
import { useCartContext } from '../contexts/CartContext'
import CartItem from './CartItem'

function Checkout() {

  let {Cart,RemoveFromCart,ClearCart,AddToCart}=useCartContext()
  
  let [cartamt,setCartamt]=useState(Cart.length)
  let [total,setTotal]=useState(0)
  let [showTotal,setShowTotal]=useState(false)

  
 

  const Clear=()=>{

    ClearCart();
    setCartamt(0)
    alert("Cart Cleared")

  }

  const calculateTotal=()=>{

    let total=0
    Cart.forEach(item=>{
      total+=item.price*item.amtpurchased
      console.log(total)
    })
   setTotal(total)
   setShowTotal(true)
  }


  let items=Cart.map(item=>{
    return (<div key={item._id}>
      
            <CartItem 
            Id={item._id} 
            item={item}  
            RemoveFromCart={RemoveFromCart}
            cartamt={cartamt}
            setCartamt={setCartamt} 
            />
      
            </div>) 
            
          
  })

  

  return (
   <React.Fragment>
      
         
        
          <h1>Checkout Page</h1>
          
          <p>items in cart:{cartamt}</p>
          <div>{items}</div>
          <br/>
          <button onClick={Clear}>Clear Cart</button>

          <br/>

          <div>
            <button onClick={calculateTotal}>Calculate Total</button>
            {showTotal &&<p>Total Amount:${total}</p>}

          </div>

          
          



         



      </React.Fragment>
    
  )
}

export default Checkout