import React from "react";
import { useState } from 'react'
import '../styles/Modal.css'



const CheckoutModal = ({OpenModal,setOpenModal,Cart,Total,setTotal}) => {

    const [msg,setmsg]=useState("")
    const [clicked,setclicked]=useState(false)
    const CheckoutUser=()=>{
       setmsg("Thank you for shopping with us")
    }


    const CalculateTotal=()=>{
        for(let x=0;x<Cart.length;x++){
          setTotal(prev=>prev+Cart[x].ItemTotalcost)
        }
        setclicked(true)

    }


    const CloseModal=()=>{
        setTotal(0)
        setOpenModal(false)
    }

    let costbreakdown=Cart.map(item=>{
        return <p>{item.productName} (${item.price}) x {item.amtpurchased} : ${item.ItemTotalcost}</p>
    })

return (

<div className="Modal">
        <h1>Finalizing your order</h1>

        <p>Here is a breakdown of your order</p>
        <div>
        {costbreakdown}
        </div>
          {clicked&&<p>Your total is : ${Total}</p>}
        <div>
        <button onClick={CheckoutUser}>Checkout 🛒</button>
        <button onClick={CloseModal}>Close</button>
        </div>
       

       {clicked===false?<button onClick={CalculateTotal}>Calculate Total</button>:""}
        

            {msg!==""?<p>{msg}</p>:<p> </p>}
    
</div>
    
)


}


export default CheckoutModal 