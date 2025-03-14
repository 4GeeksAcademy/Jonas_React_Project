import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="home-container  bg-light-purple mt-0 mb-0">
      <div className="container-fluid col-12 d-flex flex-grow-0 flex-column align-items-start bg-light-purple text-white p-5 text-start">
        <h1 className="text-dark-tittle fw-bold">Welcome to my first React project !</h1>
        <p className="lead text-dark-tittle">
          This is a simple landing page built with React, Bootstrap & CSS.
        </p>
        <div className="d-flex justify-content-start m-0 mt-2">
          <a
            href="https://4geeks.com/es/syllabus/spain-fs-pt-97/project/landing-page-with-react-es"
            className="bg-dark-purple btn text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More About This Project
          </a>
        </div>
      </div>
      </div>
  );
};

export default Home;