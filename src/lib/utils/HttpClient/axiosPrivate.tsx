"use client";

import axios from "axios";

const authHttpClient = axios.create({
  baseURL: "https://sifaris.ktmserver.com/backend",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${localStorage.getItem("accessToken") || ""}`,
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNzFiNDBlZTY0Njg1Mjk2NGEzNTExNjJjNmE2YzM2ZmJmN2U1YzgzNmQwMzRkMjlkMzEzZWY0ZDk5MDA3YWQxYzdmOGY0MDE1YjRmYTQ0Y2UiLCJpYXQiOjE3MDQ4Njk4NTMuNTc2NzUxLCJuYmYiOjE3MDQ4Njk4NTMuNTc2NzU0LCJleHAiOjE3MDQ5NTYyNTMuNTYzMTAxLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.jEj54X2NXdEm7LQZMUQVc8qfvFsnK72voMbb18QerttOABuWXhW_FpLzBZYytBSNUfz_71LUYtCfTQ5H-hxsQapUo28fFhApErB_bWbI0revGLC58v1wjtD_PZdqg4Sb7fre3w1hW0BEyBwz9gxTAhwqGRYFVsjHOo5oNYx6T1fqkzc_m0h590-Wzy_pC0ukGT38WvCod2Nd8KapNl7jitJ0kjtSwAKJ19zJ0iW35vyUrFsjuTBgXFeyO1L5oZGptLfroSZdAA3BKQYS6_ZuhxUnwkeReSfyJwIEahnhV_F7e33hhpDZfF1OWjJhU0eeZecZ8B2986TxSNqwqXsMVzwntfqqPDUTdqS8RnQ41AVEEfmYPcBDjMhbxMbreafXkRmyxGfFMC4p2An__uRkPQQJVF417Pgy4j2SKm_o0neYJhZ-3EDMjNUqnTJyZz2ZSlN_P5qbsnu-Cf6-UvoaCVxwhf00l6yCH1p4xeO7ZL72xTunLAK2AA3-3SQZJt0adq2tSqERooG5ezRbmtSnf3GzB-98Eig2ODweTqV50603RTw_bw05roRwf3gML1EFW0NDSklm2cjaxmuenWEcl83Q8qPdTYA-LpqLCXBiV4IbhDiGAhst3KodCHLpcdVfPJcqv6y7XAnjtt4GII0k4tX-0tE8O_dJUl2oAdcsozw`,
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
// const setTokenHeader = (ex: AxiosInstance, token: string) => {
//   ex.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// interface RefreshTokenSuccessResponseType {
//   token_type: string;
//   expires_in: string;
//   access_token: string;
//   refresh_token: string;
//   status: number;
//   message: string;
// }

// alert(localStorage.getItem("accessToken"));

// setTokenHeader(authHttpClient, localStorage.getItem("accessToken") || "");
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
// authHttpClient.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (err: any) => {
//     alert(
//       "since we get 403 errors on user endpoint we will refetch acess token using refresh token"
//     );
//     const originalConfig = err.config;

//     if (err?.response) {
//       // Access Token was expired
//       if (
//         err.response.status === 401 ||
//         (err.response.status === 403 && !originalConfig?._retry)
//       ) {
//         originalConfig._retry = true;
//         // alert('refresh token', )

//         try {
//           alert("intiating refresh token rotation");
//           const rs = await axios.post<RefreshTokenSuccessResponseType>(
//             "https://sifaris.ktmserver.com/backend/api/refreshtoken",
//             {},
//             {
//               headers: {
//                 Refreshtoken: localStorage.getItem("refreshToken")!,
//               },
//             }
//           );

//           const accessToken = rs.data.access_token;
//           const refreshToken = rs.data.refresh_token;
//           // alert(`new acess and refresh: ${accessToken} ${refreshToken}`);

//           alert("about to set new acess and refresh token");
//           localStorage.setItem("accessToken", accessToken);
//           localStorage.setItem("refreshToken", refreshToken);

//           return authHttpClient(originalConfig);
//         } catch (_error) {
//           alert("failed to get new acess token. redirecting to login");
//           // Logging out the user by removing all the tokens from local
//           // localStorage.removeItem("accessToken");
//           // localStorage.removeItem("refreshToken");
//           // Redirecting the user to the landing page
//           window.location.href = window.location.origin;
//           alert("we will decide it later");
//           return Promise.reject(_error);
//         }
//       }
//     }

//     return Promise.reject(err);
//   }
// );

export default authHttpClient;
