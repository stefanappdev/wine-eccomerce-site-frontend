import React, { useState } from 'react'
import { useCartContext } from '../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import CartItem from '../components/CartItem'
import "../components/CheckoutModal.js"
import "../styles/checkout.css"
import "../styles/Modal.css"
import CheckoutModal from '../components/CheckoutModal.js'

function Checkout() {

  let {Cart,RemoveFromCart,ClearCart,Total,setTotal}=useCartContext()

 
  
  let [cartamt,setCartamt]=useState(Cart.length)
  const [OpenModal,setOpenModal]=useState(false)

  let navigate = useNavigate();
 
  
 
  if (cartamt===0){
    setTotal(0)
    return (<div id="empty-cart-options">
      <h1 id="empty-cart-msg">Cart is Empty</h1>
      <br/>
      <button  onClick={()=>navigate("/products")}>Add an Item</button>
          </div>)
  }//empty cart
  
 
  

  const Clear=()=>{

    ClearCart();
    setCartamt(0)
    setTotal(0)
  
    alert("Cart Cleared")

  }

  const showModal=()=>{
    setOpenModal(prev=>!prev)
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
   <div id="checkout-page">
       
      {OpenModal && <div className='overlay'>

          <div id="ModalSection">

           <CheckoutModal OpenModal={OpenModal} setOpenModal={setOpenModal} 
                    setTotal={setTotal} Total={Total} Cart={Cart}/>
                    
            </div>
          </div>}
        
          <h1 id="page-header">Checkout Page</h1>
          
          <p id="cart-amount">items in cart:{cartamt}</p>
          <div>{items}</div>
          
          
          <div id="checkout-buttons">
              <button onClick={Clear}>Clear Cart</button>

              <button onClick={showModal}>Confirm</button>
          </div>
         

        

          
          



         



      </div>
    
  )
}

export default Checkout