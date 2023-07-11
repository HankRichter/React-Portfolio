import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center py-2 bg-color2 text-base text-color4 max-h-full md:text-lg">
      <p className="mb-3">Made by Hank Richter</p>
      <div className="flex">
        <a className="mx-5 px-2 border-2 rounded hover:bg-color1" href="https://github.com/HankRichter">GitHub</a>
        <a className="mx-5 px-2 border-2 rounded hover:bg-color1" href="https://www.linkedin.com/in/edward-richter-291785152/">
          Linkedin
        </a>
        <a className="mx-5 px-2 border-2 rounded hover:bg-color1" href="https://open.spotify.com/user/erichte1?si=12b3009059b5450f">
          Spotify
        </a>
      </div>
    </footer>
  );
}

export default Footer;
