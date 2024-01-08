import React,{useState,useEffect} from 'react'
import { useParams,useNavigate,Link } from 'react-router-dom'
import { useUserAuth } from '../contexts/UserContext'
import { useCartContext } from '../contexts/CartContext'


const ViewOneBeer = () => {
  let Params = useParams()
  let navigate = useNavigate()
  let {AddToCart,Cart}=useCartContext()
  const [Productlist,setProductlist]=useState([])
  let Allproducts=[]
  let {IsLoggedIn,UserData}=useUserAuth()


  const fetchProducts= async()=>{
    let resp=await fetch(`http://localhost:65000/products/`)  
    let result=await resp.json()
   // console.log(result)
    setProductlist(result)
    
    }


    const AddToCartHandler=(product)=>{
      if (IsLoggedIn){
          let item=Cart.find((item)=>item._id===product._id)

          if(item){
            alert("Item already in cart")
            return
          }

          AddToCart(product)
          alert(" new item added to cart")
         
      }
    }



    useEffect(()=>{
      setTimeout(()=>{
           fetchProducts()
           
        },500)
    },[])

    Allproducts=[...Productlist]
    //console.log("Allproducts:",Allproducts)


    const Beer=Allproducts.map(product=>{

   
      
     if(product.productType==="beers"&&product._id===Params.id){
       return <div className="beer-card" key={product._id}>
            <img src={product.image==="NOIMG"?"No image available":product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">description:{product.description!==""?product.description:"No description available"}</p>
              <p>price:${product.price}</p>
              <p> In stock:{product.quantity}</p>
             
              <button onClick={()=>AddToCartHandler(product)}>Add to cart</button>
              
               
            </div>
        </div>
     }
    
  })

  return (
    <div>
       
        <h1>product details</h1>
        {Beer} 
        {!IsLoggedIn?<p>Please <Link to="/login">login</Link> to add items to cart</p>:""}

        <button onClick={() => navigate(-1)}>Back</button>
      </div>
  )
}

export default ViewOneBeer