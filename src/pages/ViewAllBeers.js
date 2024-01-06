import React,{useState,useEffect} from 'react'
import "../styles/wines.css"



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
       return <div className="beer-card" key={product._id}>
            <img src={product.image==="NOIMG"?"No image available":product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">description:{product.description!==""?product.description:"No description available"}</p>
           
              <a href={`/beers/${product._id}`} className="#">more info</a>
               
            </div>
        </div>
     }
    
  })


  return (
    <div id="beers-page">
   

    <h1>Browse through our collection of the finest beers in the World!</h1>

      {beers}

    </div>
   


  )
}

export default ViewAllBeers