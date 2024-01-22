import axios from "axios";

// GLOBAL AXIOS INSTANCE
// Create an Axios instance with a specified base URL using environment variable.
// This instance, axiosInstance, is configured to make HTTP requests to the base URL
// defined in the NEXT_PUBLIC_BASE_URL environment variable.
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "https://sifaris.ktmserver.com/backend",
});
