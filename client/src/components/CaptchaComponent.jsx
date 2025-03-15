import { Col, Input } from "reactstrap";

/**
 * Captcha component displays a CAPTCHA for validation.
 *
 * @param {Object} props - The component props.
 * @param {string} props.captcha - The generated CAPTCHA string.
 * @param {string} props.captchaInput - The user input for CAPTCHA.
 * @param {function} props.handleCaptchaChange - Function to handle CAPTCHA input change.
 * @param {function} props.resetCaptcha - Function to reset the CAPTCHA.
 * @param {string} props.error - The error message for CAPTCHA validation.
 * @returns {JSX.Element} The Captcha component.
 */
const Captcha = ({
  captcha,
  captchaInput,
  handleCaptchaChange,
  resetCaptcha,
  error,
}) => (
  <Col className="captcha-section">
    <p>
      <span className="captcha-text">
        {captcha.split("").map((char, index) => (
          <span key={index} className={`captcha-letter letter-${index}`}>
            {char}
          </span>
        ))}
      </span>
      <i
        className="bi bi-arrow-clockwise refresh-icon"
        onClick={resetCaptcha}
        role="button"
        aria-label="Refresh CAPTCHA"
      ></i>
    </p>
    <Input
      type="text"
      name="captcha"
      value={captchaInput}
      onChange={handleCaptchaChange}
      placeholder="Enter captcha"
      style={{ background: "#ffffff" }}
      required
    />
    {error && <div className="error-message">{error}</div>}
  </Col>
);

export default Captcha;
