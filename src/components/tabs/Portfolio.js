import React from "react";
import Weather from "../assets/Weather.jpg";
import SpinCycle from "../assets/Spin Cycle.jpg";

const projectData = [
  {
    id: 1,
    img: Weather,
    title: "Weather app",
    production: "https://hankrichter.github.io/Weather-app/",
    github: "https://github.com/HankRichter/Weather-app",
  },
  {
    id: 2,
    img: SpinCycle,
    title: "Spin Cycle",
    production: "https://spin-cycle.herokuapp.com/",
    github: "https://github.com/Tagne13/Spin-Cycle",
  },
];

function Portfolio() {
  return (
    <section className="flex-1 p-3 bg-color3">
      <h2 className="text-3xl font-semibold mb-2">Portfolio</h2>
      <div className="flex w-96">
        {projectData.map(({ id, img, title, production, github }) => {
          return (
            <article className="border-2" key={id}>
              <img src={img} alt={title} />
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
