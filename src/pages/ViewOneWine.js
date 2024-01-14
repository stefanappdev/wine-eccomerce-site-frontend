import React,{useState,useEffect} from 'react'
import { useParams,useNavigate,Link } from 'react-router-dom'
import { useUserAuth } from '../contexts/UserContext'

import Modal from '../components/AddItemModal'
import '../styles/Modal.css'
import '../styles/App.css'



const ViewOneWine = () => {
  let navigate = useNavigate();
  let Params = useParams()
  const [Productlist,setProductlist]=useState([])
  let PROD={}
 

  const[OpenModal,setOpenModal]=useState(false)
  let Allproducts=[]
  
  let {IsLoggedIn,UserData}=useUserAuth()


  const fetchProducts= async()=>{
    let resp=await fetch(`http://localhost:65000/products/`)  
    let result=await resp.json()
    //sconsole.log(result)
    setProductlist(result)
    
    }


    const showModal=()=>{
      if (!IsLoggedIn){
        alert("Please login to add items to cart")
        navigate("/login")
        return
      }
      setOpenModal(prev=>!prev)

    }

    
    

   
    

    useEffect(()=>{
      setTimeout(()=>{
           fetchProducts()
           
        },500)
    },[])

    Allproducts=[...Productlist]
    //console.log("Allproducts:",Allproducts)


    const Wine=Allproducts.map(product=>{
   
      
      
     if(product.productType==="wines"&&product._id===Params.id){
        PROD=product
       return <div className="wine-card" key={product._id}>
            <img src={product.image==="NOIMG"?"No image available":product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">description:{product.description!==""?product.description:"No description available"}</p>
              <p>price:${product.price}</p>
              <p> In stock:{product.quantity}</p>
              
              <button onClick={showModal}>Add to cart</button>
            </div>
        </div>
     }
    
  })

  return (
    <div>

      {OpenModal && 
    
      <div className='overlay'>
          <div id="ModalSection">
            <Modal  setOpenModal={setOpenModal} OpenModal={OpenModal} item={PROD}/>
          </div>
       </div>
       
       }


        <h1>product details</h1>
        {Wine}


        

        
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
  )
}

export default ViewOneWine