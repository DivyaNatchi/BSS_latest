import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/styles/components/footer.css";
import { Link } from "react-scroll";

// Contact information data
const contactInfo = {
  address: ["18 West Gorgie Place", "Edinburgh, Scotland, EH14 1AD"],
  email: "contactus@bytesizeitsolutions.com",
};

// Useful links data
const usefulLinks = [
  { name: "Home", href: "#" },
  { name: "About us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
];

// FooterContact component
const FooterContact = ({ info }) => (
  <Col lg={6} md={6} className="footer-about">
    <Link
      to="hero"
      className="d-flex align-items-center"
      style={{ textDecoration: "none" }}
    >
      <span className="sitename">Byte Size IT Solution</span>
    </Link>
    <div className="footer-contact pt-3">
      {info.address.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <p>
        <strong>Email:</strong> <span>{info.email}</span>
      </p>
    </div>
  </Col>
);

// FooterLinks component
const FooterLinks = ({ links }) => (
  <Col lg={6} md={6} className="footer-links">
    <Row className="d-flex align-items-start mb-4">
      <Col>
        <h4>Useful Links</h4>
        <ul
          className="d-flex justify-content-start list-unstyled"
          style={{ gap: "20px" }}
        >
          {links.map((link, index) => (
            <li key={index}>
              <i className="bi bi-chevron-right"></i>{" "}
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
    <Row className="d-flex align-items-start">
      <Col>
        <h4>Follow Us</h4>
        <div className="social-links d-flex" style={{ gap: "20px" }}>
          <a
            href="https://www.linkedin.com/company/byte-size-it-solutions-ltd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </Col>
    </Row>
  </Col>
);

/**
 * Footer component displays the footer section with contact information, useful links, and a scroll-to-top button.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.testimonialModalOpen - Indicates if the testimonial modal is open.
 * @param {boolean} props.portfolioModalOpen - Indicates if the portfolio modal is open.
 * @returns {JSX.Element} The Footer component.
 */
export default function Footer({ testimonialModalOpen, portfolioModalOpen }) {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility of the scroll-to-top button
  const toggleScrollTop = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", toggleScrollTop);
    return () => {
      window.removeEventListener("scroll", toggleScrollTop);
    };
  }, []);

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="footer">
      {/* Footer Links Section */}
      <Container className="footer-top justify-content-center">
        <Row className="gy-4">
          <FooterContact info={contactInfo} />
          <FooterLinks links={usefulLinks} />
        </Row>
      </Container>

      {/* Copyright Section */}
      <Container className="copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Byte Size IT Solutions</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">Designed by Byte Size IT Solutions</div>
      </Container>
      {isVisible && !testimonialModalOpen && !portfolioModalOpen && (
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center active"
          onClick={scrollToTop}
          style={{ textDecoration: "none" }}
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      )}
    </footer>
  );
}
