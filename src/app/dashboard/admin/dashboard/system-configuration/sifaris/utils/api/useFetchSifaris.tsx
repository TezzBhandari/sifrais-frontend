import authHttpClient from "@/lib/utils/HttpClient/axiosPrivate";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";
import React from "react";
import { SifarisErrorResponse, SifarisSuccessResponse } from "../../types";

//fetches sifaris types
const fetchSifarisTypes = async () => {
  // const response = await authHttpClient.get<SifarisSuccessResponse>(
  //   "/api/sifaristypes"
  // );
  // return response.data;
  // console.log('what going on')

  const response = await authHttpClient.get<SifarisSuccessResponse>(
    "/api/sifaristypes"
  );
  return response.data.data;

  //   } catch (error) {
  //     if (isAxiosError(error)) {
  //       if (error.response) {
  //         return error.response.data as SifarisErrorResponse;
  //       } else if (error.request) {
  //         console.log(
  //           "'fetching sifaristypes; request error: ",
  //           error.cause,
  //           error.request
  //         );
  //         return {
  //           status: 10001,
  //           message: "something went wrong",
  //         } as SifarisErrorResponse;
  //       } else {
  //         console.log(
  //           "'fetching sifaristypes; request error: ",
  //           error.cause,
  //           error.request
  //         );
  //         return {
  //           status: 10002,
  //           message: "fetch config error",
  //         } as SifarisErrorResponse;
  //       }
  //     } else {
  //       console.log("not an axios error", error);
  //       return {
  //         status: 10003,
  //         message: "unexpected error",
  //       } as SifarisErrorResponse;
  //     }
  //   }
};

// use
const useFetchSifaris = () => {
  return useQuery({
    queryKey: ["fetch", "sifarisTypes"],
    queryFn: fetchSifarisTypes,
  });
};

export default useFetchSifaris;
