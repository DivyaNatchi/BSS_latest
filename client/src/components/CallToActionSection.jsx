import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../assets/styles/components/callToActionSection.css";

export default function CallToActionSection() {
  return (
    <section
      id="call-to-action"
      className="call-to-action section dark-background"
    >
      <img
        src="/assets/img/cta-bg.jpg"
        alt="Call to Action Background"
        className="cta-bg-image"
      />

      <Container>
        <Row
          className="align-items-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <Col xl="9" className="text-center text-xl-start">
            <h3>Call To Action</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </Col>
          <Col xl="3" className="cta-btn-container text-center">
            <Button className="cta-btn align-middle" href="#">
              Call To Action
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
