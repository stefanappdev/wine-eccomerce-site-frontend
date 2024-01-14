import React, { useState } from 'react'
import { useCartContext } from '../contexts/CartContext'
import "../styles/CartItem.css"
import '../styles/App.css'
import '../styles/Modal.css'
import EditModal from '../components/EditModal'



const CartItem=({Id,item,RemoveFromCart,cartamt,setCartamt})=>{

   const{Total,setTotal}=useCartContext()
   const[OpenModal,setOpenModal]=useState(false)
   const [ShouldUpdate,setShouldUpdate]=useState(false)

   

  
      
    const showEditModal=()=>{
      setOpenModal(prev=>!prev)
    }
  
  


    

    const RemoveItem=(id)=>{
   

        if (cartamt===0){ 
          return
        }else{
    
        RemoveFromCart(id)
        setCartamt(prev=>prev-1)
      
        
        }
      }


     

   

    return <div className='CartItem'>


      {OpenModal && 
          
          <div  className='overlay'>
              <div id="ModalSection">
                <EditModal  
                    setOpenModal={setOpenModal} 
                     ShouldUpdate={ShouldUpdate} 
                     setShouldUpdate={setShouldUpdate} 
                     OpenModal={OpenModal} 
                     item={item}
                    
                />
              </div>
          </div>}

        
            <div className='important'>name:<strong>{item.productName}</strong></div>
            <div className='important'>price:<strong>${item.price}</strong></div>
             <div className='Itemcounter important'>amount being purchased:
       
                <div>{item.amtpurchased}</div>
                
            </div>


            <br/>
            <div id="item-total-price" className='important'>total item price:<strong>${item.ItemTotalcost}</strong></div>
          
           <div id="cartItem-btns">
            <button id="removebtn" className='close-cancel-btn' onClick={()=>RemoveItem(Id)}>Remove</button>
            <button id='editbtn' onClick={showEditModal}>Edit</button>
          </div>


          </div>

  }


export default CartItem
