const {
  sendEmailService,
  createMessageContent,
} = require("../services/emailService");

// Controller for sending email
const sendEmail = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create email content for the customer inquiry
    const messageContent = createMessageContent(name, email, subject, message);

    // Call service layer to send email
    await sendEmailService(`New Customer Inquiry Submission`, messageContent);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error in sending email" });
  }
};

module.exports = {
  sendEmail,
};
