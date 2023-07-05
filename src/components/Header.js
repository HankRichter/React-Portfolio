import React, { useState } from "react";
import Navigation from "./Navigation";
import Contact from "./tabs/Contact";
import About from "./tabs/About";
import Resume from "./tabs/Resume";
import Portfolio from "./tabs/Portfolio";

function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <header>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
      </header>
    </>
  );
}

export default Header;
