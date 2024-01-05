import axios from "axios";

// for usingn public routes
const PublicHttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// for using auth route
const PrivateHttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export { PublicHttpClient, PrivateHttpClient };
