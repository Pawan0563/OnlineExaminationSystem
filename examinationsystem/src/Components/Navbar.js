import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect, logout,isAuthenticated,user } = useAuth0();

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light bg-custom">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="login.jsp">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="register.jsp">
                Register
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>

          
              {
                isAuthenticated && (
                  <ul>
                  <div>
                    {/* <img src={user.picture} alt={user.name} /> */}
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                  </div>
                  </ul>
                )
              }
            
            <ul>
              {isAuthenticated ? (
                <ul>
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                </ul>
              ) : (
                <ul>
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                </ul>
              )}
            </ul>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
