import React,{ useContext,useState,createContext } from "react";
const CartContext=createContext();


const CartContextProvider=({children})=>{

    const [Cart,setCart]=useState([]);

    const AddToCart=(product)=>{
        let PROD={...product}
        PROD.amountpurchased=1
        setCart([...Cart,PROD])
    }

    const UpdateItem=(id,newItm)=>{
       let item=Cart.map(item=>item._id===id?newItm:item)
    setCart([...Cart,item])
       
    }
    
    const ClearCart=()=>{
        setCart([])
    }

    const RemoveFromCart=(id)=>{

        let remaining=Cart.filter((item)=>item._id!==id)
        alert("Removing item from cart")
        return setCart([...remaining])
    }

    return <CartContext.Provider value={{Cart,RemoveFromCart,ClearCart,UpdateItem,AddToCart}}>
        {children}
    </CartContext.Provider>
    
}

const useCartContext=()=>{

    return useContext(CartContext)
}

export {CartContextProvider,useCartContext}