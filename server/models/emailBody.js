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

module.exports = {
  createEmailBody,
};
