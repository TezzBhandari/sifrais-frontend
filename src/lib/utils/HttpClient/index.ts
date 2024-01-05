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
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMDU5OTVmYmZhMTc5ZWRhYTU1MGExZjQ1YmQ0MWQ1Mzk1M2QwZDBlNTk1ODVjZDVjNmViZWY1NDBjOThmYzc5NDBkOTlhZmIyYmVmNjNiZDUiLCJpYXQiOjE3MDQ0MzQ3MzEuOTQ2MzY3LCJuYmYiOjE3MDQ0MzQ3MzEuOTQ2MzcxLCJleHAiOjE3MDQ1MjExMzEuOTIwMjY0LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.RMBi489-gdllUmarTJXBNKW2EbWnFrWB9eIR4Va0lExGkwJGNi_Ig6Y_x6I6GWPj2wk8OrAYK6LdEqInCUjEZ5WyrSRFmDU2Sur2r6ZdD00qBuHZ4IiMvDFmXBoBN5yka6oaXyC-1UPz08LecKmwvNws5fn65yXmZqKNz11awLDau9EqkFebxwXVu3nCChN3Yc43oBzwSjv98MdYK2lcvSBEYfx7vHOUKIOKJDTf6auZrhaz-yj-M-FOxxwPI6_o41HED5RZPcupavzcmu_AT_EhlihRfkQ0QiAlW0Ewdx21sX7dG-tYbko1hMtDGnU89CL9W9-PC6UY5KoGh1KKH4XyesaN5aBj299VufpNbOZ21WgdqlJdi36VwywA6ubfaAO4WR54V5gd-ZVyBNVvMKZ5w8RrikXL1fP8-HE2v37q6PE2Ro37v44uyyzxzHHhVUMsfIj0xEPRFnNW-L9jQ4a9h1DLxgXPg2Lkw54texsfTc5Gc4pT19ogzaEX65xLl5At1GaKHN7MZJxld-4sj9ZGADcKtQxXbmL4xeA51VNa5-ejTpBkq_vHILPEj0rIddOloZ1ZoillSTCtLlLGtnfYhkt5pch1dL_hTHNXhBDObO0Xmil-HqWZxUwYFLmZbERfu5yduCbhxzlJOR7Ns6yU7QeDau3UuqWKBbhYlt4",
  },
});

export { PublicHttpClient, PrivateHttpClient };
