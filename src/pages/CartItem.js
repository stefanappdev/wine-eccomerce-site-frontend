import React, { useState } from 'react'
import { useCartContext } from '../contexts/CartContext'


const CartItem=({Id,item,RemoveFromCart,cartamt,setCartamt,TotalsArr,setTotalsArr})=>{
   const [Itemcounter,setItemcounter]=useState(1)
   const{Total,setTotal}=useCartContext()
   let maxQty=item.quantity
   

  
      
    const UpdateTotalsArr=(id,newTotalcost)=>{
        let item=TotalsArr.find((item)=>item.id===id)
        if(item){
            let newTotalsArr=TotalsArr.splice(TotalsArr.findIndex((item)=>item.id===id),1,{id:id,itemTotalcost:newTotalcost})
            setTotalsArr(newTotalsArr)

        }
    }   
  

    const increaseQTY=()=>{
   
        if(Itemcounter<maxQty){

            setItemcounter(prev=>prev+1)
            UpdateTotalsArr(Id,item.price*Itemcounter)
            
            
        }else{
            alert("Max quantity reached,this item is out of stock")
            return
        } 
        
    }


    const decreaseQTY=()=>{
    if (Itemcounter===1){
        return
    }
    setItemcounter(prev=>prev-1)
    UpdateTotalsArr(Id,item.price*Itemcounter)
      
    }


    const RemoveItem=(id)=>{
   

        if (cartamt===0){ 
          return
        }else{
    
        RemoveFromCart(id)
        setCartamt(prev=>prev-1)
        setTotalsArr(TotalsArr.filter((item)=>item.id!==id))
        
        }
      }


     

   

    return <div>
        
            <div>name:<strong>{item.productName}</strong></div>
            <div>price:<strong>{item.price}</strong></div>
             <span>Amount:</span>
             <button onClick={increaseQTY}>+</button>
             <div id="counter">{Itemcounter}</div>
            <button onClick={decreaseQTY}>-</button>
            <br/>
            <div>total item price:<strong>{item.price*Itemcounter}</strong></div>
          
           
            <button onClick={()=>RemoveItem(Id)}>Remove</button>
            
    </div>
}

export default CartItem