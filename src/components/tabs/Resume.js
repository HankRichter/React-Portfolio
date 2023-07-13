import React from "react";
import ResumePDF from "../assets/resume.pdf";

function Resume() {
  return (
    <>
      <section className="flex-1 p-3 bg-color3">
        <h2 className="text-3xl font-semibold mb-2">Resume</h2>
        <div className="flex-1 py-3 bg-color3">
          <a
            href={ResumePDF}
            download
            className="p-1 border-2 rounded hover:bg-color2 hover:text-color4"
          >
            Download my Resume
          </a>
        </div>
        <div className="mb-2">
          <h3 className=" text-xl font-semibold">Front-End Knowledge</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
            <li>React</li>
          </ul>
        </div>
        <div className="mb-2">
          <h3 className=" text-xl font-semibold">Back-End Knowledge</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="mb-2">
          <h3 className=" text-xl font-semibold">Proficiencies</h3>
          <ul>
            <li>PWAs (Progressive Web Apps)</li>
            <li>Git (Version Control)</li>
            <li>OOP (Object-Oriented Programming)</li>
            <li>MVC (Model-View-Controller Paradigm)</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Resume;
