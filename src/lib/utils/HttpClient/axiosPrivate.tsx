"use client";

import axios, { AxiosInstance } from "axios";

const authHttpClient = axios.create({
  baseURL: "https://sifaris.ktmserver.com/backend",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// don't remove this commented code
// authHttpClient.defaults.baseURL = "https://sifaris.ktmserver.com/backend";

// type headers = {
//   "Content-Type": string;
//   Accept: string;
//   Authorization: string;
// };

// authHttpClient.defaults.headers = {
//   "Content-Type": "application/json",
//   Accept: "application/json",
// } as headers & HeadersDefaults & { [key: string]: AxiosHeaderValue };

// add access token in every outgoing request

// sets the access token in the authorization header before sending any request
const setTokenHeader = (ex: AxiosInstance, token: string) => {
  ex.defaults.headers.common.Authorization = `Bearer ${token}`;
};

interface RefreshTokenSuccessResponseType {
  token_type: string;
  expires_in: string;
  access_token: string;
  refresh_token: string;
  status: number;
  message: string;
}

setTokenHeader(authHttpClient, localStorage.getItem("accessToken") || "");
// authHttpClient.interceptors.request.use(
//   (config) => {
//     const accessToken = JSON.parse(
//       localStorage.getItem("accessToken") as string
//     );
//     localStorage.getItem("accessToken");
//     console.log("from the intercept adding acess token: ", accessToken);
//     if (accessToken) {
//       // Configure this as per your backend requirements
//       config.headers!["Authorization"] = `Bearer ${accessToken}`;
//     } else {
//       console.log("access token is not present");
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// refresh acesstoken if access token it invalid first time.
authHttpClient.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err: any) => {
    const originalConfig = err.config;

    if (
      originalConfig?.url !== "/login" ||
      (originalConfig?.url !== "/signup" && err?.response)
    ) {
      // Access Token was expired
      if (
        err.response.status === 401 ||
        (err.response.status === 403 && !originalConfig?._retry)
      ) {
        originalConfig._retry = true;
        // alert('refresh token', )

        try {
          const rs = await axios.post<RefreshTokenSuccessResponseType>(
            "https://sifaris.ktmserver.com/backend/api/refreshtoken",
            {},
            {
              headers: {
                Refreshtoken: localStorage.getItem("refreshToken")!,
              },
            }
          );

          const accessToken = rs.data.access_token;
          const refreshToken = rs.data.refresh_token;
          // alert(`new acess and refresh: ${accessToken} ${refreshToken}`);

          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          alert("sets new token");

          return authHttpClient(originalConfig);
        } catch (_error) {
          alert("failed to get new acess token. redirecting to login");
          // Logging out the user by removing all the tokens from local
          // localStorage.removeItem("accessToken");
          // localStorage.removeItem("refreshToken");
          // Redirecting the user to the landing page
          window.location.href = window.location.origin;
          alert("we will decide it later");
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default authHttpClient;
