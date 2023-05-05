import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Nooby Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/portfolioicon.jpg'} alt="Michael Alfaro"/>
      <p className="content is-italic mt-4">
       I'm Michael, a guy trying to further my knowledge in software developing and tech in general.
      </p>
      <p className="content">
        Learning HTML, CSS, Javascript and it's many variations mainly including react.
      </p>
    </div>
  );
}

export default About;