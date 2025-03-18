const { google } = require("googleapis");
const config = require("../config/config");
const { createEmailBody } = require("../models/emailBody");

const oAuth2Client = new google.auth.OAuth2(
  config.clientId,
  config.clientSecret,
  config.redirectUri
);

// Set OAuth2 client credentials
oAuth2Client.setCredentials({
  refresh_token: config.refreshToken,
});

/**
 * Sends an email using the Gmail API.
 * @param {string} rawEmailBody - The base64 encoded email body.
 * @returns {Promise<Object>} - The result data from the Gmail API.
 * @throws {Error} - If the email fails to send.
 */
const sendEmail = async (rawEmailBody) => {
  try {
    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    const result = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: rawEmailBody,
      },
    });

    return result.data;
  } catch (error) {
    throw new Error(`Failed to send email via Gmail API: ${error.message}`);
  }
};

/**
 * Sends an email using the Gmail API.
 * @param {string} subject - The subject of the email.
 * @param {string} messageContent - The content of the email message.
 * @returns {Promise<Object>} - The result data from the Gmail API.
 * @throws {Error} - If the email fails to send.
 */
const sendEmailService = async (subject, messageContent) => {
  const raw = createEmailBody(subject, messageContent);
  return sendEmail(raw);
};

/**
 * Sends a subscription email using the Gmail API.
 * @param {string} emailBody - The base64 encoded email body.
 * @returns {Promise<Object>} - The result data from the Gmail API.
 * @throws {Error} - If the subscription email fails to send.
 */
const sendSubscriptionEmailService = async (emailBody) => {
  return sendEmail(emailBody);
};

/**
 * Creates the content for the customer inquiry email.
 * @param {string} name - The name of the customer.
 * @param {string} email - The email of the customer.
 * @param {string} subject - The subject of the inquiry.
 * @param {string} message - The inquiry message.
 * @returns {string} - The formatted email content.
 */
const createMessageContent = (name, email, subject, message) => {
  return `
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
};

module.exports = {
  createEmailBody,
  sendEmailService,
  sendSubscriptionEmailService,
  createMessageContent,
};
