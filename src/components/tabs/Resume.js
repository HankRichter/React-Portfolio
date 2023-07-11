import React from "react";
import ResumePDF from "../assets/resume.pdf";

function Resume() {
  return (
    <>
      <section className="bg-color3">
        <h2>Resume</h2>
        <div>
          <a href={ResumePDF} download>
            Download my Resume
          </a>
        </div>
        <div>
          <h3>Front-End Knowledge</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h3>Back-End Knowledge</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h3>Proficiencies</h3>
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
