import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "reactstrap";
import { generateCaptcha } from "../utilities/captchaUtils";
import "../assets/styles/components/newsLetterSection.css";
import { subscribeEmail } from "../services/subscriptionService";
import Captcha from "./CaptchaComponent";

/**
 * NewsLetterSection component displays a newsletter subscription form with CAPTCHA validation.
 *
 * @returns {JSX.Element} The NewsLetterSection component.
 */
export default function NewsLetterSection() {
  const [email, setEmail] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    captcha: "",
  });

  useEffect(() => {
    // Generate a new CAPTCHA when the component mounts
    setCaptcha(generateCaptcha());
  }, []);

  const resetCaptcha = () => {
    setCaptcha(generateCaptcha()); // Regenerate a new captcha
    setCaptchaInput(""); // Reset the captcha input field
    setErrors({});
  };

  // Centralized validation logic for each field
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "email":
        if (!value) {
          error = "Please enter your email address.";
        } else if (value.length > 50) {
          error = "Email must not exceed 50 characters.";
        } else if (
          !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
        ) {
          error = "Please enter a valid email address.";
        }
        break;
      case "captcha":
        if (!value) {
          error = "Captcha is required.";
        } else if (value !== captcha) {
          error = "Captcha does not match. Please try again.";
        }
        break;
      default:
        break;
    }
    return error;
  };

  // Handle input change and field-level validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "captcha") {
      setCaptchaInput(value);
    }

    // Validate the field and set the error
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Perform validation before submission
    const emailError = validateField("email", email);
    const captchaError = errors.captcha; // Use the real-time captcha error

    if (emailError || captchaError) {
      setErrors({ email: emailError, captcha: captchaError });
      return;
    }

    try {
      // Call the subscribeEmail service function to subscribe the user
      const result = await subscribeEmail(email);

      setShowStatus(true);
      setStatus("success");
      if (result.message === "This email is already subscribed.") {
        setStatusMessage(result.message || "This email is already subscribed.");
      } else {
        setStatusMessage("Your subscription request has been sent. Thank you!");
      }

      // Reset the form fields after successful subscription
      setEmail("");
      resetCaptcha();
      setErrors({});
    } catch (error) {
      setShowStatus(true);
      setStatus("failed");
      setStatusMessage("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <>
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={6}>
              <h4>Join Our Newsletter</h4>
              <p>
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </p>
              <Form onSubmit={handleSubscribe} className="email-form">
                <div className="newsletter-form">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  {errors.email && (
                    <div
                      className="error-message"
                      style={{ textAlign: "left" }}
                    >
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* CAPTCHA Section */}
                <Captcha
                  captcha={captcha}
                  captchaInput={captchaInput}
                  handleCaptchaChange={handleInputChange}
                  resetCaptcha={resetCaptcha}
                  error={errors.captcha}
                />

                <Button type="submit" color="primary">
                  Subscribe
                </Button>

                {showStatus && (
                  <div className="mt-1">
                    {status === "success" && (
                      <p className="alert-success mb-3">{statusMessage}</p>
                    )}
                    {status === "failed" && (
                      <p className="alert-danger mb-3">{statusMessage}</p>
                    )}
                  </div>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
