import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="bg-color2 flex justify-between items-center">
      <div className="ml-3 my-6 text-color4">
        <h1 className="text-5xl">Hank Richter</h1>
      </div>
      <ul className="flex flex-col m-2 text-base text-color4 md:text-lg md:justify-between md:flex-row">
        <li className="m-1 p-1 border-2 rounded hover:bg-color3 hover:text-color1 md:mx-5">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="m-1 p-1 border-2 rounded hover:bg-color3 hover:text-color1 md:mx-5">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="m-1 p-1 border-2 rounded hover:bg-color3 hover:text-color1 md:mx-5">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="m-1 p-1 border-2 rounded hover:bg-color3 hover:text-color1 md:mx-5">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
