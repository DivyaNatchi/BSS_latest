import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../assets/styles/components/hero.css";

/**
 * Hero component displays the hero section with a title, description, and image.
 *
 * @returns {JSX.Element} The Hero component.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="hero section mt-10"
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-anchor-placement="top-center"
    >
      <Container>
        <Col
          lg="6"
          className=" d-flex flex-column justify-content-center"
          data-aos="zoom-out"
        >
          <h1>Better Solutions For Your Business</h1>
          <p>
            Your partner in growth! Byte Size IT Solutions delivers affordable,
            innovative tech to help SMEs thrive in today’s digital world.
          </p>
        </Col>
      </Container>
    </section>
  );
}
