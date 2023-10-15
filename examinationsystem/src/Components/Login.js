import React from "react";

function Login() {
  return (
    <>
        <div class="container">
          <div class="row mt-4">
            <div class="col-md-4 offset-md-4">
              <div class="card">
                <div class="card-header text-center c-head text-white">
                  <i
                    class="fa fa-user-circle-o	
						 fa-2x "
                  ></i>
                  <h5>Login Page</h5>
                </div>

                <div class="card-body">
                  <form action="LoginServlet" method="post">
                    <div class="form-group">
                      <label for="exampleInputEmail1">
                        Enter Email address
                      </label>{" "}
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Enter Password</label>{" "}
                      <input
                        type="password"
                        class="form-control"
                        name="pass"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-block badge-pill"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Login;
