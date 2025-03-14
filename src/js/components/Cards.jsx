import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
  return (
    
    <div className="container-fluid row g-4 justify-conten-center m-0 p-0">

      <div className="col-12 col-md-6 col-lg-3 d-flex m-0 p-0">
        <div className="card p-0 flex-grow-0 w-100">
        <img src="https://picsum.photos/500/325?grayscale=1" className="card-img">
          </img>
          
          <div class="card-body flex-grow-0 text-center d-flex flex-column align-items-center">
           <h5 class="card-title fs-3 fw-bold text-dark-tittle">Card title</h5>
            <p class="card-text text-dark-purple">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <hr className="w-100 m-0 p-0" />
          <div className="card-body flex-grow-0 d-flex justify-content-center">
              <a href="https://getbootstrap.com/docs/5.3/components/buttons/" 
              className="btn bg-dark-purple btn text-white" 
              target="_blank" rel="noopener noreferrer"
              >
                Go somewhere
              </a>
          </div>
        </div>
      </div>  


      <div className="col-12 col-md-6 col-lg-3 d-flex m-0 p-0">
        <div className="card p-0 flex-grow-0 w-100">
        <img src="https://picsum.photos/500/325?grayscale=2" className="card-img">
          </img>
          
          <div class="card-body flex-grow-0 text-center d-flex flex-column align-items-center">
           <h5 class="card-title fs-3 fw-bold text-dark-tittle">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <hr className="w-100 m-0 p-0" />
          <div className="card-body flex-grow-0 d-flex justify-content-center">
              <a href="https://getbootstrap.com/docs/5.3/components/buttons/"
               className="btn bg-dark-purple btn text-white"
               target="_blank" rel="noopener noreferrer"
              >
                Go somewhere
              </a>
          </div>
        </div>
      </div>  


      <div className="col-12 col-md-6 col-lg-3 d-flex m-0 p-0">
        <div className="card p-0 flex-grow-0 w-100">
        <img src="https://picsum.photos/500/325?grayscale=3" className="card-img">
          </img>
          
          <div class="card-body flex-grow-0 text-center d-flex flex-column align-items-center">
           <h5 class="card-title fs-3 fw-bold text-dark-tittle">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <hr className="w-100 m-0 p-0" />
          <div className="card-body flex-grow-0 d-flex justify-content-center">
              <a href="https://getbootstrap.com/docs/5.3/components/buttons/" 
              className="btn bg-dark-purple btn text-white"
              target="_blank" rel="noopener noreferrer"
              >
                Go somewhere
              </a>
          </div>
        </div>
      </div>  


      <div className="col-12 col-md-6 col-lg-3 d-flex m-0 p-0">
        <div className="card p-0 flex-grow-0 w-100">
        <img src="https://picsum.photos/500/325?grayscale=4" className="card-img">
          </img>
          <div class="card-body flex-grow-0 text-center d-flex flex-column align-items-center">
           <h5 class="card-title fs-3 fw-bold text-dark-tittle">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <hr className="w-100 m-0 p-0" />
          <div className="card-body flex-grow-0 d-flex justify-content-center">
              <a href="https://getbootstrap.com/docs/5.3/components/buttons/"
              className="btn bg-dark-purple btn text-white"
              target="_blank" rel="noopener noreferrer"
              >
                Go somewhere
              </a>
          </div>
        </div>
      </div>
      
      
      


        
    </div>
  );
};

export default Cards;
