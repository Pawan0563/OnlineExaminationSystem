import pic1 from"./Images/on1.png"
import React from "react";
//import "./Service.css"
function Service() {
  return (
    <div>
      <h1 className="text-center text-primary text-capitalize my-4 mb-3">Welcome to Our Services</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            
            <div class="card">
              <img src={pic1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            
          </div>
          <div className="col">
            
            <div class="card">
              <img  src={pic1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            
          </div>
          <div className="col">
            
            <div class="card">
              <img  src={pic1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
