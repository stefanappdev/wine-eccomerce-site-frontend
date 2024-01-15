import React,{useState} from "react"

const Signup=()=>{

	
	
	const[formdata,setformdata]=useState({
        

		password:"",
		email:"",
	

		})


	const handleChange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value});
  }

	const HandleSubmit=()=>{
	fetch("http://localhost:65000/users",
		{
			method:"POST",
			headers:{"Content-Type":'application/json'},
			body:JSON.stringify(formdata),
		}

	)
	.then(resp=>{
		console.log(resp)
	})
	.catch(err=>{
		console.log(err)
	})

	}




	return(

    <div> 

    <h1>Signup</h1>

    
	<form onSubmit={HandleSubmit}>


			
		<label>
			email:<input type="text" onChange={handleChange} placeholder='email' value={formdata.email} name="email"/>
		</label>
		
		<br/>

		<label>
			password:<input type="password" onChange={handleChange} placeholder='password' value={formdata.password} name="password"/>

		</label>




		

		<button>Submit</button>

	</form>

    </div>   



	)

}

	


export default Signup;