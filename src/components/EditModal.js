import React,{useState} from 'react'
import '../styles/Modal.css'

import { useCartContext } from '../contexts/CartContext'


function EditModal({ShouldUpdate,setShouldUpdate,item,setOpenModal,OpenModal}) {

    let {Cart,setCart}=useCartContext()

    const [Itemcounter,setItemcounter] = useState(item.amtpurchased)
    let maxQty=item.quantity

    if(OpenModal){
        setShouldUpdate(true)
        
    }else{
            setShouldUpdate(false)
    }
    

    const decreaseQTY=()=>{
        if (Itemcounter===1){
            return
        }
        setItemcounter(prev=>prev-1)
       
        }
  
        const increaseQTY=()=>{
   
            if(Itemcounter<maxQty){
    
                setItemcounter(prev=>prev+1)  
            }else{
                alert("Max quantity reached,this item is out of stock")
                return
            } 

        }


        const ConfirmEdit=(item)=>{
            console.log(Cart)
            let newitem={...item,amtpurchased:Itemcounter,ItemTotalcost:item.price*Itemcounter}
            let pos=Cart.findIndex((Itm)=>Itm._id===item._id)
            Cart[pos]=newitem
            setCart([...Cart])
            alert("Item Edited")
            setOpenModal(false)
        }


  return (
    <div className='Modal' id="EditItemModal">
        
        <h1>Edit Item</h1>

                    <div>Name: <strong>{item.productName}</strong></div>
                    <div>Price: <strong>${item.price}</strong></div>
                    <div>in stock: <strong>{item.quantity}</strong></div>

                    <div className='Itemcounter'>How many do you want?:
                        <button onClick={decreaseQTY} className='decrementqty'> - </button>
                            <div>{Itemcounter}</div>
                            <button onClick={increaseQTY} className='incrementqty'>+</button>
                    </div>

                  

        <div id="total" className='important'>Total price:${item.price*Itemcounter}</div>
                  <br/><br/>
        
        <button className='close-cancel-btn' onClick={()=>setOpenModal(false)}>Cancel</button>
        <button onClick={()=>ConfirmEdit(item)}>Confirm</button>
        
    </div>
  )
}

export default EditModal