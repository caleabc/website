import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-div">
      <p className="about-header">About Me</p>

      <p className="about-short-intro">
        I write and maintain code, collaborate with team members, debug issues,
        and ensure applications run smoothly.
      </p>
      <p className="about-outside-of-work">
        Outside of work, I go out for a cup of coffee or for some snack, meet
        friends. When I have some free time, I take a bicycle and go for a ride.
      </p>
      <p className="about-contact">
        I'm glad to respond, you can message me here{" "}
        <span className="about-email">calechfs@gmail.com</span>
      </p>
    </div>
  );
}

export default About;
