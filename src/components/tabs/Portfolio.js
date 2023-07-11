import React from "react";

const projectData = [
  {
    id: 1,
    // img: img,
    title: "Weather app",
    production: "https://hankrichter.github.io/Weather-app/",
    github: "https://github.com/HankRichter/Weather-app",
  },
  {
    id: 2,
    // img: img,
    title: "Spin Cycle",
    production: "https://spin-cycle.herokuapp.com/",
    github: "https://github.com/Tagne13/Spin-Cycle",
  },
];

function Portfolio() {
  return (
    <section className="bg-color3">
      <h2>Portfolio</h2>
      <div>
        {projectData.map(({ id, img, title, production, github }) => {
          return (
            <article key={id}>
              <div>
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div>
                <a href={production} target="_blank">
                  Production
                </a>
                <a href={github} target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
