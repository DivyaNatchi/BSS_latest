import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { generateCaptcha } from "../utilities/captchaUtils";
import "../assets/styles/components/contactSection.css";
import { sendEmail } from "../services/emailService";
import Captcha from "./CaptchaComponent";

// Contact information data
const contactInfo = [
  {
    icon: "bi bi-geo-alt",
    title: "Address",
    details: [
      "18 West Gorgie Place",
      "Edinburgh, Scotland, EH14 1AD",
      <a
        href="https://find-and-update.company-information.service.gov.uk/company/SC705685"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reg. No. SC705685
      </a>,
    ],
  },
  {
    icon: "bi bi-envelope",
    title: "Email Us",
    details: ["contactus@bytesizeitsolutions.com"],
  },
];

// ContactInfo component
const ContactInfo = ({ info }) => (
  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
    <i className={`${info.icon} flex-shrink-0`}></i>
    <div>
      <h3>{info.title}</h3>
      {info.details.map((detail, index) => (
        <p key={index}>{detail}</p>
      ))}
    </div>
  </div>
);

/**
 * ContactSection component displays a contact form with CAPTCHA validation.
 *
 * @returns {JSX.Element} The ContactSection component.
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Generate a new CAPTCHA when the component mounts
    setCaptcha(generateCaptcha());
  }, []);

  const resetCaptcha = () => {
    setCaptcha(generateCaptcha()); // Regenerate a new captcha
    setCaptchaInput(""); // Reset the captcha input field
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Field-level validation on input change
    const fieldError = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError || "", // Set field-specific error or clear error
    }));
  };

  const handleCaptchaChange = (e) => {
    const value = e.target.value;
    setCaptchaInput(value);

    // Validate CAPTCHA in real-time
    let captchaError = "";
    if (!value) {
      captchaError = "Captcha is required.";
    } else if (value !== captcha) {
      captchaError = "Captcha does not match. Please try again.";
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      captcha: captchaError,
    }));
  };

  // Centralized field validation logic
  const validateField = (name, value) => {
    let error = "";
    const nameAndSubjectRegex = /^[A-Za-z0-9\s]{1,252}$/;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const messageRegex = /^[A-Za-z0-9\s.]{1,512}$/;

    switch (name) {
      case "name":
      case "subject":
        if (!value.trim()) {
          error = "This field is required.";
        } else if (value.length > 252) {
          error = "Must not exceed 252 characters.";
        } else if (!nameAndSubjectRegex.test(value)) {
          error = "Only alphabets, numbers and spaces are allowed.";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Please enter your email address.";
        } else if (value.length > 50) {
          error = "Email must not exceed 50 characters.";
        } else if (!emailRegex.test(value)) {
          error = "Please enter a valid email address.";
        }
        break;
      case "message":
        if (!value.trim()) {
          error = "This field is required.";
        } else if (value.length > 512) {
          error = "Must not exceed 512 characters.";
        } else if (!messageRegex.test(value)) {
          error = "Only alphabets, numbers, spaces, and dots are allowed.";
        }
        break;
      default:
        break;
    }

    return error;
  };

  // Validate all fields before submission
  const validateFields = (data) => {
    const validationErrors = {};
    Object.keys(data).forEach((key) => {
      const error = validateField(key, data[key]);
      if (error) validationErrors[key] = error;
    });
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation before submission
    const validationErrors = validateFields(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Call the sendEmail function to send the form data to the server
      const response = await sendEmail(formData);
      // setStatus("Message sent! Thank you!");
      setShowStatus(true);
      setStatus("success");

      // Reset form fields after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setCaptcha(generateCaptcha()); // Regenerate captcha after successful submission
      setCaptchaInput(""); // Reset captcha input
      setErrors({});
    } catch (error) {
      // setStatus("Failed to send message. Please try again.");
      setShowStatus(true);
      setStatus("failed");
    }
  };

  return (
    <section id="contact" className="contact section light-background">
      <Container className="section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
      </Container>

      <Container data-aos="fade-up" data-aos-delay="100">
        <Row className="gy-4">
          {/* Contact Info Section */}
          <Col lg={5}>
            <div className="info-wrap">
              {contactInfo.map((info, index) => (
                <ContactInfo key={index} info={info} />
              ))}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.112213866131!2d-3.2488601880585373!3d55.93009257821028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c73fc0d8ca1f%3A0x934f0cdaccae31be!2s18%20W%20Gorgie%20Pl%2C%20Edinburgh%20EH14%201AD%2C%20UK!5e0!3m2!1sen!2sqa!4v1736662976907!5m2!1sen!2sqa"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "270px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>

          {/* Contact Form Section */}
          <Col lg={7}>
            <div className="info-wrap">
              <Form
                onSubmit={handleSubmit}
                noValidate
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Row className="gy-4">
                  <Col md={6}>
                    <FormGroup>
                      <Label for="name-field">Your Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name-field"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && (
                        <div className="error-message">{errors.name}</div>
                      )}
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup>
                      <Label for="email-field">Your Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email-field"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && (
                        <div className="error-message">{errors.email}</div>
                      )}
                    </FormGroup>
                  </Col>

                  <Col md={12}>
                    <FormGroup>
                      <Label for="subject-field">Subject</Label>
                      <Input
                        type="text"
                        name="subject"
                        id="subject-field"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      {errors.subject && (
                        <div className="error-message">{errors.subject}</div>
                      )}
                    </FormGroup>
                  </Col>

                  <Col md={12}>
                    <FormGroup>
                      <Label for="message-field">Message</Label>
                      <Input
                        type="textarea"
                        name="message"
                        id="message-field"
                        rows={10}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />

                      {errors.message && (
                        <div className="error-message">{errors.message}</div>
                      )}
                    </FormGroup>
                  </Col>
                  <Col>
                    {/* CAPTCHA Section */}
                    <Captcha
                      captcha={captcha}
                      captchaInput={captchaInput}
                      handleCaptchaChange={handleCaptchaChange}
                      resetCaptcha={resetCaptcha}
                      error={errors.captcha}
                    />
                  </Col>

                  <Col md={12} className="text-center">
                    {showStatus && (
                      <div>
                        {status === "success" && (
                          <p className="success mb-3">
                            We have successfully received your message. Our team
                            will review your inquiry and get back to you
                            shortly. We appreciate your interest and look
                            forward to assisting you!
                          </p>
                        )}
                        {status === "failed" && (
                          <p className="failed mb-3">
                            Failed to send message. Please try again.
                          </p>
                        )}
                      </div>
                    )}
                    <Button type="submit" color="primary">
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
