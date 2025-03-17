import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/styles/components/servicesSection.css";
import servicesData from "../data/serviceData";

/**
 * ServicesSection component displays a section with a list of services.
 *
 * @returns {JSX.Element} The ServicesSection component.
 */
export default function ServicesSection() {
  return (
    <section id="services" className="services section">
      <Container className="section-title " data-aos="fade-up">
        <h2>Our Services</h2>
        <p className="services-desc">
          Imagine a world where your ideas come to life, where your business
          evolves into a digital powerhouse, and where growth is not just a
          possibility it's a guarantee. At Byte Size IT Solutions Pvt. Limited,
          we are not just service providers; we are dream enablers. Every
          business has a story, and every story deserves to shine. Let us take
          you on a journey of transformation one where your brand becomes
          unforgettable, your operations run seamlessly, and your customers are
          delighted at every step.
        </p>
      </Container>

      <Container>
        <Row className="gy-4">
          {servicesData.map((service, index) => (
            <Col
              key={index}
              xl="3"
              md="6"
              className="d-flex"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-item position-relative">
                <div className="icon d-flex justify-content-center align-items-center mb-3">
                  {/* <i className={`bi ${service.icon} icon`}></i> */}
                  <img
                    src={service.icon}
                    alt="services icon"
                    className="icon-image me-3"
                  />
                  <h4>{service.title}</h4>
                </div>
                <hr />
                {service.description.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
