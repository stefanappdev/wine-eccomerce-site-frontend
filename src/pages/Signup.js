import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import "../styles/Login-Signup.css"
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({

	username: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().min(8).max(30).required(),
	
})



const Signup=()=>{


let navigate=useNavigate()
	
	const [UserData,setUserData]=useState([])


	const {register,handleSubmit,formState:{errors}}=useForm({
		resolver:yupResolver(schema)
	})


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


	const SubmitUser=(formdata)=>{

		let Users=[...UserData]

		let exists=Users.find(user=> user.email===formdata.email)

		if (exists){
			alert("user already exists")
			return
		}

		//function to submit new users to database
	fetch("http://localhost:65000/users",
		{
			method:"POST",
			headers:{"Content-Type":'application/json'},
			body:JSON.stringify(formdata),
		}

	)
	
	.catch(err=>{
		console.log(err)
	})


	alert("User created successfully,redirecting to login page")
	setTimeout(()=>{
		navigate("/login")
	},2000)
	

	}




	return(

    <div className="page"> 

		<h1>Signup Page</h1>


	<form className="form" onSubmit={handleSubmit(SubmitUser)}>
 		


		<label for ="email">
			email:<input type="text" className="Forminput" {...register("email")} placeholder='email' id="email" name="email"/>
		</label>

		<p className="errors">{errors.email?.message}</p>
		
		<br/>
			
		<label>
			username:<input className="Forminput" type="text" {...register("username")} placeholder='username' id="Signup-username" name="username"/>
		</label>

		<p className="errors">{errors.username?.message}</p>
		
		<br/>

		<label>
			password:<input  className="Forminput" type="password" {...register("password")} placeholder='password' id="password" name="password"/>

		</label>

		<p className="errors">{errors.password?.message}</p>




		
		<div className="form-buttons">
			<button onClick={() => navigate("/")}>back</button>
			<button>Submit</button>
		</div>
		
	</form>

    </div>   



	)

}

	


export default Signup;