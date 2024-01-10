import { PrivateHttpClient, PublicHttpClient } from "../HttpClient";
import RequestHandler from "../requestHandler";
import { AxiosError } from "axios";

/**
 * used to access public route
 * @returns
 */
const PublicQuery = <TData, TError = AxiosError, TBody = {}, TParams = {}>() =>
  RequestHandler<TData, TError, TBody, TParams>((requestConfig) =>
    PublicHttpClient<TData>({
      url: requestConfig.url,
      method: requestConfig.httpMethod,
      data: requestConfig.body,
      headers: requestConfig.headers,
      params: requestConfig.params,
    })
  );

/**
 * Used to access private route
 * @returns
 */
const PrivateQuery = <TData, TError = AxiosError, TBody = {}, TParams = {}>() =>
  RequestHandler<TData, TError, TBody, TParams>((requestConfig) =>
    PrivateHttpClient<TData>({
      url: requestConfig.url,
      method: requestConfig.httpMethod,
      data: requestConfig.body,
      headers: requestConfig.headers,
      params: requestConfig.params,
    })
  );

export { PublicQuery, PrivateQuery };
