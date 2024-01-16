import { PublicHttpClient } from "../HttpClient/axiosPublic";
import RequestHandler from "../requestHandler";
import { AxiosError } from "axios";

/**
 * used to access public route
 * @returns
 */
const PublicQuery = <
  TData,
  TError = AxiosError,
  THeaders = {},
  TBody = {},
  TParams = {}
>() =>
  RequestHandler<TData, TError, THeaders, TBody, TParams>((requestConfig) =>
    PublicHttpClient<TData>({
      url: requestConfig.url,
      method: requestConfig.httpMethod,
      data: requestConfig.body,
      headers: requestConfig.headers,
      params: requestConfig.params,
    })
  );

export { PublicQuery };
