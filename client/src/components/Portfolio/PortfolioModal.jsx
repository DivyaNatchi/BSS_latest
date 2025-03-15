// PortfolioModal.jsx
import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

/**
 * PortfolioModal component displays a modal with project details.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.modalOpen - Indicates if the modal is open.
 * @param {function} props.toggleModal - Function to toggle the modal state.
 * @param {Object} props.selectedProject - The selected project details.
 * @param {string} props.selectedProject.description - The project description.
 * @param {string} props.selectedProject.image - The project image URL.
 * @param {string} props.selectedProject.title - The project title.
 * @param {string} props.selectedProject.details - The project details.
 * @returns {JSX.Element} The PortfolioModal component.
 */
export default function PortfolioModal({
  modalOpen,
  toggleModal,
  selectedProject,
}) {
  return (
    <Modal
      isOpen={modalOpen}
      toggle={() => toggleModal()}
      className="modal-lg portfolio-model"
    >
      <ModalHeader toggle={() => toggleModal()}>
        {selectedProject?.description}
      </ModalHeader>
      <ModalBody>
        <img
          src={selectedProject?.image}
          alt={selectedProject?.title}
          className="img-fluid mb-3"
        />
        {selectedProject?.details.split("\n").map((line, index) => (
          <p key={index} className="mt-2">
            {line}
          </p>
        ))}
      </ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          onClick={() => toggleModal()}
          className="btn-portfolio_close"
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
