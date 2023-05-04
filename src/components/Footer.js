import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/ZOID415" target="_blank" rel="noreferrer">
           Michael Alfaro
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/michael-alfaro-820aa0247/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>
          //*TODO:still need third platform
        </p>
      </div>
    </footer>
  );
}

export default Footer;
