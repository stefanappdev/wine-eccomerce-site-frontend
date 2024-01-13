import React, { useState } from 'react'
import { useCartContext } from '../contexts/CartContext'
import "../styles/CartItem.css"
import '../styles/App.css'


const CartItem=({Id,item,RemoveFromCart,cartamt,setCartamt})=>{

   const{Total,setTotal}=useCartContext()

   

  
      
    


    

    const RemoveItem=(id)=>{
   

        if (cartamt===0){ 
          return
        }else{
    
        RemoveFromCart(id)
        setCartamt(prev=>prev-1)
      
        
        }
      }


     

   

    return <div className='CartItem'>
        
            <div>name:<strong>{item.productName}</strong></div>
            <div>price:<strong>${item.price}</strong></div>
             <div className='Itemcounter'>amount being purchased:
       
                <div>{item.amtpurchased}</div>
                
            </div>


            <br/>
            <div>total item price:<strong>${item.ItemTotalcost}</strong></div>
          
           
            <button className='removeitem' onClick={()=>RemoveItem(Id)}>Remove</button>
            
    </div>
}

export default CartItem