import React, { useState } from 'react'
import { useCartContext } from '../contexts/CartContext'
import CartItem from './CartItem'

function Checkout() {

  let {Cart,RemoveFromCart,ClearCart,Total,setTotal,TotalsArr,setTotalsArr}=useCartContext()
 
  
  let [cartamt,setCartamt]=useState(Cart.length)
  
 
  
 
  if (cartamt===0){
    setTotal(0)
    return <h1>Cart is Empty</h1>
  }//empty cart
  
 const CalculateTotal=()=>{
  let sum=0 
  for(let x=0;x<TotalsArr.length;x++){

      sum=sum+TotalsArr[x].itemTotalcost
   }
   setTotal(sum)
   console.log("Your total is:",Total)
   console.log("TotalsArr",TotalsArr)
 }

  const Clear=()=>{

    ClearCart();
    setCartamt(0)
    setTotal(0)
    setTotalsArr([])
    alert("Cart Cleared")

  }



  let items=Cart.map(item=>{
    return (<div key={item._id}>
      
            <CartItem 
            Id={item._id} 
            item={item}  
            RemoveFromCart={RemoveFromCart}
            cartamt={cartamt}
            setCartamt={setCartamt} 
            setTotalsArr={setTotalsArr}
            TotalsArr={TotalsArr}
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
          <br/>

          <button onClick={CalculateTotal}>Show Total</button>

          <br/>

          <div>

         
          </div>

          
          



         



      </React.Fragment>
    
  )
}

export default Checkout