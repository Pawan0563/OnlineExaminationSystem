import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"
import './Navbar.css'



function Navbar() {
  const { loginWithRedirect, logout,isAuthenticated,user } = useAuth0();

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar navbar-light bg-light bg-custom">
        <Link class="navbar-brand" to="/">
          Dashboard
        </Link>
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
              <Link class="nav-link" to="/">
                Home
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">
              Search
            </button>

          
              {
                isAuthenticated && (
                  <ul class="nav-item">
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
                  <button class="btn btn-outline-danger my-2 my-sm-0 nav-item"
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
