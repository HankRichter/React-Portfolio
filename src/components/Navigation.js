import React from "react";
import Project from "./Project";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <h1>Hank Richter</h1>
      <ul>
        <li>
          About Me
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          ></a>
        </li>
        <li>
          Portfolio
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          ></a>
        </li>
        <li>
          Contact
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          ></a>
        </li>
        <li>
          Resume
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          ></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
