import React,{ useContext,useState,createContext } from "react";
const CartContext=createContext();


const CartContextProvider=({children})=>{

    const [Cart,setCart]=useState([]);

    //total cost of all items in cart
    const [Total,setTotal]=useState(0);

     //array with total cost of each item in cart
  const [TotalsArr,setTotalsArr]=useState([])

    const AddToCart=(product)=>{
        
        setCart([...Cart,product])
        setTotalsArr([...TotalsArr,{id:product._id,itemTotalcost:product.price}])

    }

    const UpdateItem=(id,newItm)=>{
       Cart.map(item=>item._id===id?newItm:item)
       setCart([...Cart])
       
    }
    
    const ClearCart=()=>{
        setCart([])
        setTotalsArr([])
    }

    const RemoveFromCart=(id)=>{

        let remaining=Cart.filter((item)=>item._id!==id)
        alert("Removing item from cart")
        return setCart([...remaining])
    }

    return <CartContext.Provider value={{Cart,Total,setTotal,RemoveFromCart,
        TotalsArr,setTotalsArr,AddToCart,ClearCart,UpdateItem}}>
        {children}
    </CartContext.Provider>
    
}

const useCartContext=()=>{

    return useContext(CartContext)
}

export {CartContextProvider,useCartContext}