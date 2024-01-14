import React from 'react'
import { useState } from 'react'
import "../styles/Modal.css"
import "../styles/App.css"
import { useCartContext } from '../contexts/CartContext'



const AddItemModal = ({setOpenModal,OpenModal,item}) => {

    let {AddToCart,Cart}=useCartContext()
    const [Itemcounter,setItemcounter] = useState(1)
    let maxQty=item.quantity
    item.amtpurchased=Itemcounter
    item.ItemTotalcost=item.price*Itemcounter 

    const AddToCartHandler=(product)=>{
        
            let item=Cart.find((item)=>item._id===product._id)
              

            if(item){
              alert("Item already in cart")
              setTimeout(()=>{
                setOpenModal(false)
            },1000)

              return
            }else{
             
            AddToCart(product)
            console.log(product)
            alert(" new item added to cart") 

            setTimeout(()=>{
                setOpenModal(false)
            },1000)

            
            }

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

    return (
        <div className="Modal" id="AddItemModal">
         <div id='purchase-details'>
                    <h1>Details of purchase</h1>
                <div>Name: <strong>{item.productName}</strong></div>
                    <div>Price: <strong>${item.price}</strong></div>
                    <div>in stock: <strong>{item.quantity}</strong></div>

                    <div className='Itemcounter'>How many do you want?:
                    <button onClick={decreaseQTY} className='decrementqty'> - </button>
                        <div>{Itemcounter}</div>
                        <button onClick={increaseQTY} className='incrementqty'>+</button>
                    </div>

                    <div id="total">Total:${item.price*Itemcounter}</div>
                
        </div>
        <div id="modal-btns">
                <button className="modal-btn close-cancel-btn" id="close-modal" onClick={() => setOpenModal(false)}>Close</button>
                <button className="modal-btn" id="add-to-cart" onClick={() => AddToCartHandler(item)}>Add to cart</button>
        </div>
        
        </div>
    )
}


export default AddItemModal 