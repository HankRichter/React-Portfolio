import React from "react";
import Portrait from "../assets/Portrait.jpg";

function About() {
  return (
    <>
      <section className="flex-1 p-3 bg-color3 md:flex md:justify-center">
        <div>
          <h2 className="text-3xl font-semibold mb-2">About Me</h2>
          <img src={Portrait} alt="Portrait of Hank Richter" />
          <p className="text-lg mt-3 md:w-96">
            My name is Hank Richter. I am currently a Network Technician at a
            Michigan-based ISP called 123Net. I love opportunities where I can
            be creative, as well as deplore my problem-solving skills. Thus, I
            have turned to a career in software development. I hope to
            continually update this page with projects to demonstrate my growth.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
