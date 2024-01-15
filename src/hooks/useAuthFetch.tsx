"use client";
import { useAccessTokenStore } from "@/store/accessTokenStore";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const useAuthHttpClient = () => {
  const { setAccessToken, accessToken } = useAccessTokenStore();

  // auth client
  const authHttpClient = axios.create({
    baseURL:
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://sifaris.ktmserver.com/backend",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      withCredentials: true,
    },
  });

  // refresh token function
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken") as string;
    const response = await axios.post<{
      token_type: string;
      expires_in: string;
      access_token: string;
      refresh_token: string;
      status: number;
      message: string;
    }>(
      "/api/refreshtoken",
      {},
      {
        headers: {
          Refreshtoken: refreshToken,
        },
      }
    );
    setAccessToken(response.data.access_token);
    return response.data.access_token;
  };

  //   request interceptor  adds access token in the header
  authHttpClient.interceptors.request.use(
    function (config) {
      if (
        !config.headers.Authorization ||
        config.headers.Authorization === ""
      ) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // adds reponse interceptor
  authHttpClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const previousReqeust =
        error.config as InternalAxiosRequestConfig<any> & {
          _retry: boolean;
        };

      if (error.response?.status === 401 && !previousReqeust._retry) {
        previousReqeust._retry = true;
        // Access token has been expired on there is no access token
        // if the refresh token doesnot existsin the local storage , we need to logout the user and navigate to login page
        // TODO
        // we check for the refresh token; if it exists in the localstorage we get new acess token; no need to logout the user;
        // refresh access token using refresh token
        const accessToken = await refreshToken();
        previousReqeust.headers.Authorization = `Bearer ${accessToken}`;
        return authHttpClient(previousReqeust);
      }
      return Promise.reject(error);
    }
  );

  return authHttpClient;
};

export default useAuthHttpClient;
