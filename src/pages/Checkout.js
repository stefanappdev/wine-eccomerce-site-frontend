import React, { useState } from 'react'
import { useCartContext } from '../contexts/CartContext'
import { useUserAuth } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import CartItem from '../components/CartItem'
import "../components/CheckoutModal.js"
import "../styles/checkout.css"
import "../styles/Modal.css"
import "../styles/App.css"
import CheckoutModal from '../components/CheckoutModal.js'

function Checkout() {

  let {Cart,RemoveFromCart,ClearCart,Total,setTotal}=useCartContext()

 
  let {isLoggedIn}=useUserAuth()

  const [OpenModal,setOpenModal]=useState(false)

  let navigate = useNavigate();


  
 
  if (Cart.length===0){
    setTotal(0)
    return (<div id="empty-cart-options">
      <h1 id="empty-cart-msg">Cart is Empty</h1>
      <br/>
      <button  onClick={()=>navigate("/products")}>Add an Item</button>
          </div>)
  }//empty cart
  
 
  

  const Clear=()=>{

    ClearCart();
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
         
            
          
            />
      
            </div>) 
            
          
  })

  

  return (
   <div id="checkout-page" className='App-page'>
       
      {OpenModal && <div  className='overlay'>

          <div id="ModalSection">

           <CheckoutModal OpenModal={OpenModal} setOpenModal={setOpenModal} 
                    setTotal={setTotal} Total={Total}/>
                    
            </div>
          </div>}
        
          <h1 id="page-header">Checkout Page</h1>
          
          <h2 id="cart-amount">Items in cart: {Cart.length}</h2>
          <div>{items}</div>
          
          
          <div id="checkout-buttons">
              <button id ="clear-cart" className='close-cancel-btn' onClick={Clear}>Clear Cart</button>
              <button id="add-more" onClick={()=>navigate("/products")}>Add more Items</button>
              <button id="confirm-order" onClick={showModal}>Confirm</button>
          </div>
         

        

          
          



         



      </div>
    
  )
}

export default Checkout