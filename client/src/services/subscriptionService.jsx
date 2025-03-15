import axiosInstance from "./axiosInstance"; // Import axios instance

// API URL configuration
const API_URL = "/subscription"; // Adjust according to your backend route

/**
 * Subscribes the user email.
 * @param {string} email - The email to subscribe.
 * @returns {Promise<Object>} - The success response data from the API.
 * @throws {Error} - If the subscription fails.
 */
export const subscribeEmail = async (email) => {
  try {
    // Send POST request to subscribe the email
    console.log("suscribeEmail", email);
    const response = await axiosInstance.post(`${API_URL}/subscribe`, {
      email,
    });
    console.log("response data", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error subscribing email:",
      error.response?.data || error.message
    );
    throw new Error("Failed to subscribe email");
  }
};
