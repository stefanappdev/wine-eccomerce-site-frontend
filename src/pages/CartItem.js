import React, { useState } from 'react'


const CartItem=({Id,item,RemoveFromCart,UpdateItem,cartamt,setCartamt})=>{
   const [Itemcounter,setItemcounter]=useState(1)

    const increase=()=>{
   
        if(Itemcounter<item.quantity){

            setItemcounter(prev=>prev+1)
           
       
        }else{
            alert("Max quantity reached,this item is out of stock")
            return
        } 
        

    }

    const decrease=()=>{
    if (Itemcounter===1){
        return
    }
    setItemcounter(prev=>prev-1)
  
    }


    const RemoveItem=(id)=>{
   

        if (cartamt===0){
          return
        }else{
    
        RemoveFromCart(id)
        setCartamt(cartamt-1)
        
        }
      }

    return <div>
        
            <div>name:<strong>{item.productName}</strong></div>
            <div>price:<strong>{item.price}</strong></div>
             <span>Amount:</span>
             <button onClick={increase}>+</button>
             <div id="counter">{Itemcounter}</div>
            <button onClick={decrease}>-</button>
            <button onClick={()=>RemoveItem(Id)}>Remove</button>
            
    </div>
}

export default CartItem