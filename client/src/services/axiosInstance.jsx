import axios from "axios";

// Get the current host from the window object
const host = window.location.hostname;
const protocol = window.location.protocol === "https:" ? "https" : "http";

// Statically assign the port number and construct the base URL
const baseURL = `${protocol}://${host}:${process.env.VITE_REACT_APP_API_PORT}/api`;

/**
 * Creates an Axios instance with a predefined base URL.
 * @returns {AxiosInstance} - The configured Axios instance.
 */
const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
