import React,{useState,useEffect} from 'react'
import { useParams,useNavigate,Link } from 'react-router-dom'
import { useUserAuth } from '../contexts/UserContext'

import Modal from '../components/AddItemModal'
import '../styles/Modal.css'
import '../styles/App.css'
import "../styles/Singleproduct.css"



const ViewOneBeer = () => {
  let Params = useParams()
  let navigate = useNavigate()

  const [Productlist,setProductlist]=useState([])
  let Allproducts=[]
  let PROD={}
  const[OpenModal,setOpenModal]=useState(false)
  let {IsLoggedIn,UserData}=useUserAuth()


  const fetchProducts= async()=>{
    let resp=await fetch(`http://localhost:65000/products/`)  
    let result=await resp.json()
   // console.log(result)
    setProductlist(result)
    
    }


    const showModal=()=>{
      if (!IsLoggedIn){
        alert("Please login to add items to cart")
        navigate("/login")
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


    const Beer=Allproducts.map(product=>{

   
      
     if(product.productType==="beers"&&product._id===Params.id){
      PROD=product
       return <div class="product-card-single" key={product._id}>
            <img src={product.image==="NOIMG"?"No image available":product.image} className="card-img-top-single"  alt={`${product.productName}`}/>
            <div className="card-body-single">
              <h4 className="card-title-single ">{product.productName}</h4>
              <p className="card-text-single">{product.description!==""?"description:"+product.description:""}</p>
              <p className='important-details'>price:${product.price}</p>
              <p className='important-details'> In stock:{product.quantity}</p>
             <br/>
              <button onClick={showModal}>Add to cart </button>
              
               
            </div>

            
        </div>
     }
    
  })

  return (
    <div className='product-details'>

{OpenModal && 
    
    <div className='overlay'>
        <div id="ModalSection">
          <Modal  setOpenModal={setOpenModal} OpenModal={OpenModal} item={PROD}/>
        </div>
     </div>
     
     }

       
        <h1>product details</h1>
        <div class="display-container-single" >{Beer} </div>


        <button className='back-btn' onClick={() => navigate(-1)}>Back</button>
      </div>
  )
}

export default ViewOneBeer