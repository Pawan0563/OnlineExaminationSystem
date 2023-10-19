import React from 'react'
import { useNavigate } from "react-router-dom";

function Register() {

	const navigate=useNavigate();
	const handleSubmit=(e)=>{
	  e.preventDefault()
	  navigate('/login')
	}
   
  return (
    <>
    <div>

    
	<div class="container" onSubmit={handleSubmit}>
		<div class="row mt-4">
			<div class="col-md-4 offset-md-4">
				<div class="card">
					<div class="card-header text-center c-head text-white">

						<i class="fa fa-user-circle-o	
						 fa-2x "></i>
						<h5>Registration Page</h5>

					</div>
				   	
					<div class="card-body">
						<form action="rs" method="post">

							<div class="form-group">
								<label for="exampleInputEmail1">Enter Full Name</label> <input
									type="text" class="form-control" id="exampleInputEmail1"
									aria-describedby="emailHelp" name="fn"/>
							</div>


							<div class="form-group">
								<label for="exampleInputEmail1">Enter Email address</label> <input
									type="email" class="form-control" id="exampleInputEmail1"
									aria-describedby="emailHelp" name="em"/>
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">Enter Password</label> <input
									type="password" class="form-control" id="exampleInputPassword1"
									name="ps"/>
							</div>
							<button type="submit"
								class="btn btn-primary btn-block badge-pill">Register</button>
						</form>
				</div>
				</div>
			</div>
		</div>
	</div>


    </div>

    </>
  )
}

export default Register