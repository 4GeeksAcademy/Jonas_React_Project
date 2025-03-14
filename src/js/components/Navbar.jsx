import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark-purple navbar-dark bg-dark py-1 px-4">
      <a className="navbar-brand" href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
      target="_blank" rel="noopener noreferrer"
      >
        Start Bootstrap
        </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="https://getbootstrap.com/"
            target="_blank" rel="noopener noreferrer"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://es.wikipedia.org/wiki/Bootstrap_(framework)"
            target="_blank" rel="noopener noreferrer"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://getbootstrap.com/docs/5.3/examples/"
            target="_blank" rel="noopener noreferrer"
            >
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/JonasTR-909"
            target="_blank" rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
