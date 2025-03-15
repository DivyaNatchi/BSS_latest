const { sendEmailService } = require("../services/emailService");

// Controller for sending email
const sendEmail = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Email content for the customer inquiry
    const messageContent = `
      Dear Team,

      We have received a new customer inquiry through our website contact form. Please find the details below:

      Customer's Name: ${name}
      Customer's Email: ${email}
      Subject: ${subject}
      Inquiry: ${message}

      Kindly review the inquiry and get back to the customer as soon as possible.

      Thank you for your prompt attention to this matter.

      Best regards,
      Team - Web Admin
      Byte Size IT Solution Limited
    `;

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
