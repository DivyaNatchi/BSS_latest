import React from "react";
import { Container, Button } from "reactstrap"; // Assuming you're using Reactstrap for layout
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../../assets/styles/components/testimonialsSection.css";
import testimonials from "../../data/testimonialData";
import TestimonialModal from "./TestimonialModal";

// TestimonialItem component
const TestimonialItem = ({ testimonial, toggleModal }) => (
  <div className="testimonial-item">
    <img
      src={testimonial.image}
      className="testimonial-img"
      alt={`${testimonial.name}'s testimonial`}
    />
    <h3>{testimonial.name}</h3>
    <h4>{testimonial.title}</h4>
    <p>
      <i className="bi bi-quote quote-icon-left"></i>
      {testimonial.feedback}
      {testimonial.hasReadMore && (
        <Button
          color="link"
          onClick={() => toggleModal(testimonial)}
          className="details-link"
        >
          <i className="bi bi-arrow-right read-more-icon"></i>
        </Button>
      )}
      <i className="bi bi-quote quote-icon-right"></i>
    </p>
  </div>
);

/**
 * TestimonialsSection component displays a section with testimonials and a modal for detailed view.
 *
 * @param {Object} props - The component props.
 * @param {function} props.toggleModal - Function to toggle the modal state.
 * @param {boolean} props.modalOpen - Indicates if the modal is open.
 * @param {Object} props.selectedTestimonial - The selected testimonial details.
 * @param {function} props.setSelectedTestimonial - Function to set the selected testimonial.
 * @returns {JSX.Element} The TestimonialsSection component.
 */
export default function TestimonialsSection({
  toggleModal,
  modalOpen,
  selectedTestimonial,
  setSelectedTestimonial,
}) {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
      </div>
      <Container data-aos="fade-up">
        {/* Swiper Component for Testimonials */}
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialItem
                testimonial={testimonial}
                toggleModal={toggleModal}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div> {/* Pagination bullets */}
      </Container>

      {/* Pass necessary props to the TestimonialModal */}
      <TestimonialModal
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        selectedTestimonial={selectedTestimonial}
      />
    </section>
  );
}
