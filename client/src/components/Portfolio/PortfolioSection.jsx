import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/components/portfolioSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import portfolioItems from "../../data/portfolioData";
import PortfolioModal from "./PortfolioModal";

/**
 * PortfolioSection component displays a portfolio section with a filterable list of projects.
 *
 * @param {Object} props - The component props.
 * @param {function} props.toggleModal - Function to toggle the modal state.
 * @param {boolean} props.modalOpen - Indicates if the modal is open.
 * @param {Object} props.selectedProject - The selected project details.
 * @param {function} props.setSelectedProject - Function to set the selected project.
 * @returns {JSX.Element} The PortfolioSection component.
 */
export default function PortfolioSection({
  toggleModal,
  modalOpen,
  selectedProject,
  setSelectedProject,
}) {
  const [activeFilter, setActiveFilter] = useState("*");

  const filters = [
    { name: "All", filter: "*" },
    { name: "App", filter: "filter-app" },
    { name: "Card", filter: "filter-product" },
    { name: "Web", filter: "filter-branding" },
  ];

  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="section-title" data-aos="fade-up">
        <h2>Our Portfolio</h2>
        <p>
          At Byte Size IT Solutions Pvt. Limited, every project is a new
          chapter, every client is a partner in success, and every solution is a
          story of transformation.
        </p>
      </div>

      <Container className="portfolio-container" data-aos="fade-up">
        {/* Swiper Component for Testimonials */}
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
          }}
          spaceBetween={30}
          breakpoints={{
            587: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {portfolioItems
            .filter(
              (item) => activeFilter === "*" || item.filter === activeFilter
            )
            .map((item, index) => (
              <SwiperSlide key={index}>
                <a
                  key={`${index}-${modalOpen}`}
                  className={`portfolio-item isotope-item card-layout ${item.filter}`}
                  onClick={() => toggleModal(item)}
                >
                  <div className="portfolio-image-wrapper">
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt={item.title}
                    />
                  </div>
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    {/* <Button
                      color="link"
                      onClick={() => toggleModal(item)}
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </Button> */}
                  </div>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-pagination"></div> {/* Pagination bullets */}
      </Container>

      {/* PortfolioModal Component */}
      <PortfolioModal
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        selectedProject={selectedProject}
      />
    </section>
  );
}
