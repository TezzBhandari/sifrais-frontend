import httpClient from "@/lib/HttpClient";
import RequestHandler from "../requestHandler";
import { AxiosError } from "axios";

/**
 *
 * @returns
 */
const query = <TData, TError = AxiosError, TBody = {}, TParams = {}>() =>
  RequestHandler<TData, TError, TBody, TParams>((requestConfig) =>
    httpClient<TData>({
      url: requestConfig.url,
      method: requestConfig.httpMethod,
      headers: requestConfig.headers,
      params: requestConfig.params,
    })
  );

export default query;
