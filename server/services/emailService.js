const { google } = require("googleapis");
const config = require("../config/config");

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
 * Creates a base64 encoded email body.
 * @param {string} subject - The subject of the email.
 * @param {string} messageContent - The content of the email message.
 * @returns {string} - The base64 encoded email body.
 */
const createEmailBody = (subject, messageContent) => {
  const rawMessage = [
    `From: "Web Admin" <${process.env.EMAIL_USER}>`,
    `To: ${process.env.COMPANY_EMAIL}`,
    `Subject: ${subject} | ${new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })}`,
    "Content-Type: text/plain; charset=utf-8",
    "",
    messageContent,
  ].join("\n");

  return Buffer.from(rawMessage)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, ""); // Gmail API expects base64url format
};

/**
 * Sends an email using the Gmail API.
 * @param {string} subject - The subject of the email.
 * @param {string} messageContent - The content of the email message.
 * @returns {Promise<Object>} - The result data from the Gmail API.
 * @throws {Error} - If the email fails to send.
 */
const sendEmailService = async (subject, messageContent) => {
  try {
    // Get the Gmail API instance
    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    // Create email body in base64 encoded format
    const raw = createEmailBody(subject, messageContent);

    // Send the email using gmail.users.messages.send
    const result = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: raw,
      },
    });

    return result.data;
  } catch (error) {
    throw new Error(`Failed to send email via Gmail API: ${error.message}`);
  }
};

/**
 * Sends a subscription email using the Gmail API.
 * @param {string} emailBody - The base64 encoded email body.
 * @returns {Promise<Object>} - The result data from the Gmail API.
 * @throws {Error} - If the subscription email fails to send.
 */
const sendSubscriptionEmailService = async (emailBody) => {
  try {
    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    const result = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: emailBody,
      },
    });

    return result.data;
  } catch (error) {
    throw new Error(
      `Failed to send subscription email via Gmail API: ${error.message}`
    );
  }
};

module.exports = {
  createEmailBody,
  sendEmailService,
  sendSubscriptionEmailService,
};
