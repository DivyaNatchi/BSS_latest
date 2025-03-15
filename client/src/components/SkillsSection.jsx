import React from "react";
import { Container, Row, Col, Progress } from "reactstrap";
import "../assets/styles/components/skillsSection.css";

// Import image
import skillsImage from "../assets/img/skills.png"; // Make sure the path is correct for your project

export default function SkillsSection() {
  const skills = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "Photoshop", value: 55 },
  ];
  return (
    <section id="skills" className="skills section">
      <Container data-aos="fade-up" data-aos-delay="100">
        <Row>
          {/* Left Image */}
          <Col lg={6} className="d-flex align-items-center">
            <img src={skillsImage} alt="Skills" className="img-fluid" />
          </Col>

          {/* Right Content */}
          <Col lg={6} className="pt-4 pt-lg-0 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptas</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Skills Progress */}
            <div className="skills-content skills-animation">
              {skills.map((skill, index) => (
                <div className="progress" key={index}>
                  <span className="skill">
                    <span>{skill.name}</span>{" "}
                    <i className="val">{skill.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    {/* Dynamically set class based on the skill value */}
                    <Progress
                      className={`progress-bar width-${skill.value}`}
                      value={skill.value}
                      role="progressbar"
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
