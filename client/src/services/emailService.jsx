// src/services/emailService.jsx
import axiosInstance from "./axiosInstance";

// API URL configuration
const API_URL = "/email";

// Function to send form data to the server

/**
 * Sends form data to the server to send an email.
 *
 * @param {Object} formData - The form data to be sent in the email.
 * @returns {Promise<Object>} - The response data from the server.
 * @throws {Error} - Throws an error if the email sending fails.
 */
export const sendEmail = async (formData) => {
  try {
    const response = await axiosInstance.post(
      `${API_URL}/send-email`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error sending email:",
      error.response?.data || error.message
    );
    throw new Error("Failed to send email");
  }
};
