import React,{useState,useEffect} from 'react'
import "../styles/Allproducts.css"
import { Link } from 'react-router-dom'



//shows all the beers in database
const ViewAllWines = () => {
 
// function to fetch all wines 


  const [Productlist,setProductlist]=useState([])
  let Allproducts=[]
 
  const fetchProducts= async()=>{
    let resp=await fetch(`${process.env.REACT_APP_WINE_API}/products`)  
    let result=await resp.json()
    //console.log(result)
    setProductlist(result)
    
    }

  
  
    
    useEffect(()=>{
      setTimeout(()=>{
           fetchProducts()
           
        },1000)
    },[])

    Allproducts=[...Productlist]
    //sconsole.log("Allproducts:",Allproducts)


    const wines=Allproducts.map(product=>{

      
      
     if(product.productType==="wines"){
       return <Link to={`/products/wines/${product._id}`} className="card-link">
              
              

              <div className="product-card"  key={product._id}>
            <img src={product.image==="NOIMG"?"No image available":product.image} className="card-img-top"  alt={`${product.productName}`}/>
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              
                    </div>
                 </div>
              
              </Link>
               
          
     }
    
  })


  return (
    <div className="wines-page">
  

      <div className="display-container">{wines}</div>

    </div>
   


  )
}

export default ViewAllWines