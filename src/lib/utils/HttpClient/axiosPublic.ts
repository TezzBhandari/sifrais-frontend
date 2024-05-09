import axios from "axios";

// for using public routes
const PublicHttpClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://sifarisold.ktmserver.com/backend",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { PublicHttpClient };
