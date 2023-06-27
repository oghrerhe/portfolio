import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SAMUEL OGHRERHE </span>
            from <span className="purple"> Delta State, Nigeria.</span>
            <br /> I am a student pursuing Ordinary National Diploma (OND)
            in Computer Science And Information Technologie at Petroleum Training Institute Effurun.
            <br />
            Additionally, I am currently employed as a software developer at
            THE BIG CITY CONCEPTS.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SAMUEL</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
