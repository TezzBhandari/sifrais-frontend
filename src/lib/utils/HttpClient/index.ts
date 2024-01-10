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
    Authorization:
      "Bearer eyJpdiI6Im9leTl2dWdyR0FjMVZGNHdxTVJ6dlE9PSIsInZhbHVlIjoiLzlDNmZsWmVSK09RR1lrYU5aZURBQT09IiwibWFjIjoiZDViZjgwMmM4Njk3M2RhYTYzMGY1YjE3ZDA0NzMyZjhhOWMxM2Y0YjRjZjIxZjhkYzMzZGNiZmJiZDNhNjk3NiIsInRhZyI6IiJ9",
  },
});

export { PublicHttpClient, PrivateHttpClient };
