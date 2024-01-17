import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/Login-Signup.css"

const schema = yup.object().shape({

    username: yup.string().required(),
    password: yup.string().min(8).max(30).required(),
    
  });

const LoginPage=()=>{


    
    const [UserData,setUserData]=useState([])
    
    const[target,setTarget]=useState(null)


    let navigate=useNavigate();
    let UC=useUserAuth();
  

    const{register,handleSubmit,formState:{errors}}=useForm({
      resolver:yupResolver(schema)
    
    });

   





    const fetchUsers=async()=>{

      ///function to fetch users from database
          let resp= await fetch("http://localhost:65000/users")
          let users= await resp.json();
          setUserData(users)
        }

        useEffect(()=>{
        setTimeout(()=>{

        fetchUsers();

        },1000)
        },[])  
        



    const HandleLogin=(user)=>{
      
  
       
        
        if(user){
            
           UC.setIsLoggedIn(true)
            UC.setUserData(target)
            UC.setWhoIsLoggedIn(target.username)
            alert("login successful,redirecting to homepage")
            
            setTimeout(()=>{
            navigate(`/`)
            },2000)
            
        }
    }
    

    const submitForm=(FormData)=>{
        

        let Users=[...UserData]
       //console.log(Users)
      
        let Targ=Users.find(user=> user.email===FormData.username || user.username===FormData.username)
                       
        setTarget(Targ)

      if(target){

          if(target.password!==FormData.password){
            alert("user not found,please recheck username and password")
           
            return
          }else{

            HandleLogin(target);
          }

        

      }

        
    }
      
    
    return(
      <div className="page">
       
        <div className="form-container">

           <h1>Login Page</h1>
        <form className="form" onSubmit={handleSubmit(submitForm)}>

          <label for="username"> 
           Username:<input type="text"  className="Forminput" id="Login-username" placeholder="username or email" name="username" {...register("username")} />
          </label>
          
          
          <br/>

          <p className="errors">{errors.username?.message}</p>

          <br/>

          <label for="password">
           Password: <input type="password"  className="Forminput" id="password" placeholder="password" name="password" {...register("password")} />
          
          </label>

          <p className="errors">{errors.password?.message}</p>

          <br/>

          <div className="form-buttons">

            <button onClick={() => navigate("/")}>back</button>
            <button type="submit">Login</button>

          </div>
          

        </form>

        </div>
        

      </div>
    )

}

export default LoginPage