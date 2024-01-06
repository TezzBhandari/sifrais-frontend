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
      "Bearer eyJpdiI6Im4rQnloU1Z0cElnZUJWRi91YitUaEE9PSIsInZhbHVlIjoiKzkwbSt1aERYcGRDeVVBaE44WlFhUT09IiwibWFjIjoiMDcwYTQyYTY2NGJlOTNmNTUxN2M1MTQ0ZTExY2NlZmE0NGFmYzAxODBlMWU4ZjhlNTRkNjBlMjU1ZDc3MzEyZCIsInRhZyI6IiJ9",
  },
});

export { PublicHttpClient, PrivateHttpClient };
