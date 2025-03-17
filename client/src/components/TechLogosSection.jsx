import React from "react";
import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../assets/styles/components/TechlogosSection.css";

// Importing techlogo images
import tech1 from "../assets/img/techLogos/flutter.png";
import tech2 from "../assets/img/techLogos/react.png";
import tech3 from "../assets/img/techLogos/nodejs.png";
import tech4 from "../assets/img/techLogos/zend.png";
import tech5 from "../assets/img/techLogos/firebase.png";
import tech6 from "../assets/img/techLogos/sqlite.png";
import tech7 from "../assets/img/techLogos/mongodb.png";
import tech8 from "../assets/img/techLogos/my-sql.png";
import tech9 from "../assets/img/techLogos/mariadb.png";
import tech10 from "../assets/img/techLogos/postgre-sql.png";
import tech11 from "../assets/img/techLogos/dart.png";
import tech12 from "../assets/img/techLogos/php.png";

const techLogos = [
  { src: tech1, alt: "Flutter Logo" },
  { src: tech2, alt: "React Logo" },
  { src: tech3, alt: "Nodejs Logo" },
  { src: tech4, alt: "Zend Framework Logo" },
  { src: tech5, alt: "Firebase Logo" },
  { src: tech6, alt: "Sqlite Logo" },
  { src: tech7, alt: "MangoDB Logo" },
  { src: tech8, alt: "MySQL Logo" },
  { src: tech9, alt: "MariaDB Logo" },
  { src: tech10, alt: "PostgreSQL Logo" },
  { src: tech11, alt: "Dart Logo" },
  { src: tech12, alt: "PHP Logo" },
];

/**
 * TechlogosSection component displays a carousel of technology logos.
 * Uses Swiper for the carousel functionality with autoplay and pagination.
 *
 * @component
 * @example
 * return (
 *   <TechlogosSection />
 * )
 */
export default function TechlogosSection() {
  return (
    <section id="clients" className="clients section light-background">
      <Container data-aos="zoom-in">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000, // Adjust delay to control the time between slides
            disableOnInteraction: false, // Ensure autoplay doesn't stop when interacting
          }}
          slidesPerView="auto"
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 120,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 120,
            },
          }}
        >
          {techLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo.src}
                className="img-fluid tech-logo"
                alt={logo.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
