// src/components/Testimonials/TestimonialModal.jsx
import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

/**
 * TestimonialModal component displays a modal with detailed testimonial information.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.modalOpen - Indicates if the modal is open.
 * @param {function} props.toggleModal - Function to toggle the modal state.
 * @param {Object} props.selectedTestimonial - The selected testimonial details.
 * @param {string} props.selectedTestimonial.image - The testimonial image URL.
 * @param {string} props.selectedTestimonial.title - The testimonial title.
 * @param {string} props.selectedTestimonial.name - The testimonial name.
 * @param {string} props.selectedTestimonial.details - The testimonial details.
 * @returns {JSX.Element} The TestimonialModal component.
 */
export default function TestimonialModal({
  modalOpen,
  toggleModal,
  selectedTestimonial,
}) {
  return (
    <Modal isOpen={modalOpen} toggle={() => toggleModal()} className="modal-lg">
      <ModalHeader toggle={() => toggleModal()}>
        <div className="testimonial-header d-flex align-items-center">
          <img
            src={selectedTestimonial?.image}
            alt={selectedTestimonial?.title}
            className="testimonial-logo me-3"
          />
          <h5 className="mb-1">{selectedTestimonial?.name}, &nbsp;</h5>
          <p className="mb-0">{selectedTestimonial?.title}</p>
        </div>
      </ModalHeader>
      <ModalBody>
        {selectedTestimonial?.details.split("\n").map((line, index) => {
          if (line.includes("[center]")) {
            // Remove the marker and center the text
            return (
              <p key={index} style={{ textAlign: "center" }}>
                {line.replace("[center]", "").trim()}
              </p>
            );
          } else if (line.includes("[bolditalic]")) {
            // Add extra line space before this paragraph
            return (
              <p
                key={index}
                style={{
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginTop: "20px",
                }}
              >
                {line.replace("[bolditalic]", "").trim()}
              </p>
            );
          } else if (line.includes("[newline]")) {
            // Add extra line space before this paragraph
            return (
              <p key={index} style={{ marginTop: "20px" }}>
                {line.replace("[newline]", "").trim()}
              </p>
            );
          } else if (line.includes("[bullet]")) {
            // Replace marker with a bullet point and render as a list item
            return (
              <ul key={index} style={{ paddingLeft: "20px" }}>
                <li>{line.replace("[bullet]", "").trim()}</li>
              </ul>
            );
          } else {
            // Default paragraph style
            return <p key={index}>{line.trim()}</p>;
          }
        })}
      </ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          onClick={() => toggleModal()}
          className="btn-testimonial_close"
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
