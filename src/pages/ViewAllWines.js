import React,{useState,useEffect} from 'react'
import "../styles/wines.css"
import { Link } from 'react-router-dom'



//shows all the beers in database
const ViewAllWines = () => {
 

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


    const wines=Allproducts.map(product=>{

      
      
     if(product.productType==="wines"){
       return <div className="wine-card" key={product._id}>
            <img src={product.image==="NOIMG"?"No image available":product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">description:{product.description!==""?product.description:"No description available"}</p>
           
              <Link to={`/products/wines/${product._id}`} className="#">more info</Link>
               
            </div>
        </div>
     }
    
  })


  return (
    <div id="wines-page">
   

    <h1>Browse through our collection of the finest wines in the World!</h1>

      {wines}

    </div>
   


  )
}

export default ViewAllWines