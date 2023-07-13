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
      <div className="md:flex">
        {projectData.map(({ id, img, title, production, github }) => {
          return (
            <article className="my-2 pb-3 border-2 md:m-2" key={id}>
              <img src={img} alt={title} />
              <h3 className=" text-xl font-semibold m-2">{title}</h3>
              <div className="mt-3">
                <a href={production} target="_blank" className="m-2 p-1 border-2 rounded hover:bg-color2 hover:text-color4">
                  Production
                </a>
                <a href={github} target="_blank" className="m-2 p-1 border-2 rounded hover:bg-color2 hover:text-color4">
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
