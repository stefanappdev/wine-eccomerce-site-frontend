import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserContext";


const LoginPage=()=>{

    let navigate=useNavigate();
    let UC=useUserAuth();
  

     const [UserData,setUserData]=useState([])
     
     const [loginmsg,setloginmsg]=useState("")
     const[target,setTarget]=useState(null)
     const [formdata,setformdata]=useState({

        password:"",
        username:""
     })

    const handleChange=(e)=>{
       
        
        setformdata({...formdata,[e.target.name]:e.target.value});
    }

     const fetchUsers=async()=>{
             let resp= await fetch("http://localhost:65000/users")
             let users= await resp.json();
              setUserData(users)
        }

      useEffect(()=>{
        setTimeout(()=>{

        fetchUsers();
       
        },1000)
      },[])  
         
      
      
       


    const HandleLogin=()=>{
       let Users=[...UserData]
       //console.log(Users)
      
        Users.find(user=>{
                    if(
                    (user.password===formdata.password && user.username===formdata.username)
                        ||
                        (user.password===formdata.password && user.email===formdata.username)){
                         setTarget(user)
                    }
                    
                })

        //console.log(target)
       
        
      
        
        if(target){
            
           UC.setIsLoggedIn(true)
            UC.setUserData(target)
            UC.setWhoIsLoggedIn(target.username)
            setloginmsg("login successful")
            
            setTimeout(()=>{

            //console.log("user found")
            navigate(`/users/${target._id}/home`)
            },2000)
            
        }else{
            setloginmsg("Please check your username or password")
            UC.setIsLoggedIn(false)
            
            }
    
  }
    

    const HandleSubmit=(e)=>{
        e.preventDefault();
        HandleLogin();
    }
      

    return(<React.Fragment>

        <h1>Login Page</h1>

    <form onSubmit={HandleSubmit}>
			
		

		<label>
			username or email:
			<input type="text" 
			onChange={handleChange} 
			placeholder='Enter your username or email' 
			value={formdata.username} name="username"
			/>

		</label>

		
		<br/>

		
		<label>
			password:
			<input 
			type="password"
			 onChange={handleChange} 
			placeholder='password' 
			value={formdata.password} 
			name="password"
			/>

		</label>

        <button type="submit">Submit</button>

    </form>


        {loginmsg}


    </React.Fragment>)
}



export default LoginPage