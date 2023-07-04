import React from "react";

const projectData = [
  {
    id: 1,
    // img: img,
    title: "Weather app",
    production:"https://hankrichter.github.io/Weather-app/",
    github: "https://github.com/HankRichter/Weather-app"
  },
  {
    id: 2,
    // img: img,
    title: "Spin Cycle",
    production: "https://spin-cycle.herokuapp.com/",
    github: "https://github.com/Tagne13/Spin-Cycle"
  }
]

function Portfolio() {
  return (
    <>
      <h2>Portfolio</h2>
      <div>
        <a href="#">
          <div>
            Placeholder Project
            <p>Languages used</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Portfolio;
