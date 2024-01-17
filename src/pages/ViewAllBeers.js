import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../styles/Allproducts.css"



//shows all the beers in database
const ViewAllBeers = () => {
 

  const [Productlist,setProductlist]=useState([])
  let Allproducts=[]
 
  const fetchProducts= async()=>{
    let resp=await fetch("http://localhost:65000/products")  
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


    const beers=Allproducts.map(product=>{

      
      
     if(product.productType==="beers"){
       
       
       return <Link to={`/products/beers/${product._id}`} className="card-link">
              
              

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
    <div id="beers-page">
   

   <div className="display-container">{beers}</div>

    </div>
   


  )
}

export default ViewAllBeers