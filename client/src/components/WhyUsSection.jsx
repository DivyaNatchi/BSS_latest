import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/styles/components/whyUsSection.css";
import whyUsImage from "../assets/img/Webpage-02-Regular.png";

const whyUsItems = [
  {
    id: 1,
    title: "Developing Solutions for SMEs",
    content: `At Byte Size, we're not just service providers. we're also product developers. We design and build our own products and services specifically tailored for SMEs. Our goal is to provide robust, user-friendly solutions that address the unique pain points of small and medium-sized businesses.`,
  },
  {
    id: 2,
    title: "Affordable Pricing",
    content: `We believe that technology should be accessible to all businesses, regardless of size or budget. That's why we offer our products and services at very reasonable prices, ensuring that SMEs can leverage the power of technology without breaking the bank.`,
  },
  {
    id: 3,
    title: "Beyond Business",
    content: `At Byte Size IT Solutions, we believe in giving back to the community. As part of our Corporate Social Responsibility (CSR) efforts, we develop products that address everyday needs, supporting small businesses and the public free of charge.`,
  },
  {
    id: 4,
    title: "Our Philosophy",
    content: `We don't just solve problems; we craft solutions that empower businesses, promote growth, and support our community. Our team is dedicated to making a positive impact through technology, and we're excited to partner with you on your digital journey.`,
  },
];

/**
 * WhyUsItem component displays individual FAQ items.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.whyUsItem - FAQ item data
 * @param {boolean} props.isActive - Whether the FAQ item is active
 * @param {function} props.onClick - Function to toggle the FAQ item
 * @example
 * return (
 *   <WhyUsItem whyUsItem={whyUsItem} isActive={isActive} onClick={onClick} />
 * )
 */
const WhyUsItem = ({ whyUsItem, isActive, onClick }) => (
  <div className={`whyUsItem-item ${isActive ? "whyUsItem-active" : ""}`}>
    <h3 onClick={onClick}>
      <span>{`0${whyUsItem.id}`}</span> {whyUsItem.title}
    </h3>
    {isActive && (
      <div className="whyUsItem-content">
        <p>{whyUsItem.content}</p>
      </div>
    )}
    <i
      className={`whyUsItem-toggle bi ${isActive ? "bi-chevron-down" : "bi-chevron-right"}`}
      onClick={onClick}
    ></i>
  </div>
);

/**
 * WhyUsSection component displays a section explaining why to choose the company.
 * Includes a list of FAQ items and an image.
 *
 * @component
 * @example
 * return (
 *   <WhyUsSection />
 * )
 */
export default function WhyUsSection() {
  const [activeFaqs, setActiveFaqs] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  // Toggle active, allowing multiple to stay expanded
  const toggleFaq = (index) => {
    setActiveFaqs((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="why-us" className="section why-us light-background">
      <Container fluid>
        <Row className="gy-4">
          {/* Left Content */}
          <Col
            lg={7}
            className="d-flex flex-column justify-content-center order-2 order-lg-1"
          >
            <div
              className="content px-xl-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>
                <span>Innovative Solutions for a Growing Future </span>
                <strong>Empowering Your Business, One Step at a Time</strong>
              </h3>
              <p>
                Choosing Byte Size IT Solutions means partnering with a team
                that’s driven to see your business grow. We tailor each solution
                to meet the exact needs of SMEs, combining innovation with
                affordability. With us, technology becomes your greatest ally —
                enabling your business to flourish while staying within budget.
                Let’s build a brighter, tech-powered future together!
              </p>
            </div>

            <div
              className="whyUsItem-container px-xl-5 mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* WhyUs Items */}
              {whyUsItems.map((whyUsItem) => (
                <WhyUsItem
                  key={whyUsItem.id}
                  whyUsItem={whyUsItem}
                  isActive={activeFaqs[whyUsItem.id]}
                  onClick={() => toggleFaq(whyUsItem.id)}
                />
              ))}
            </div>
          </Col>

          {/* Right Image */}
          <Col lg={5} className="order-1 order-lg-2 why-us-img">
            <img
              src={whyUsImage}
              alt="Why Us"
              className="img-fluid"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
