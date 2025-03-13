import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="container flex-column bg-light-purple text-white mx-2 p-5 text-start" style={{height: "70%",}}>
        <h1>Welcome to my first React project</h1>
        <p className="lead text-dark-purple">
          This is a simple landing page built with React, Bootstrap & CSS.
        </p>
        <div className="d-flex justify-content-start">
          <a
            href="https://4geeks.com/es/syllabus/spain-fs-pt-97/project/landing-page-with-react-es"
            className="btn btn-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;