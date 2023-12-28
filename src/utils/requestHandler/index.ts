import {
  Axios,
  AxiosError,
  AxiosRequestHeaders,
  AxiosResponse,
  isAxiosError,
} from "axios";

// TYPE: BASE REQUEST COFIGURATION TYPE
interface BaseRequestConfig<TBody = {}, TParams = {}> {
  params?: TParams;
  headers?: AxiosRequestHeaders;
  body?: TBody;
  url: string;
  httpMethod: "get" | "post" | "put" | "patch" | "delete" | "options";
}

// TYPE: BASE REQUEST
type BaseRequest<TData, TBody = {}, TParams = {}> = (
  requestConfig: BaseRequestConfig<TBody, TParams>
) => Promise<AxiosResponse<TData>>;

// SUCCESS RESPONSE TYPE
type SuccessResponse<TData> = {
  code: "success";
  // statusCode: number;
  data: TData;
};

// ERROR RESPONSE TYPE
type ErrorResponse<TError = AxiosError> = {
  code: "error";
  // statusCode: number;
  error: TError;
};

// BASE RESPONSE TYPE
type BaseResponse<TData, TError = AxiosError> = Promise<
  SuccessResponse<TData> | ErrorResponse<TError>
>;
const BaseResponse = Promise;

/**
 *
 * @param request: BaseRequest
 * @returns (requestConfig: BaseRequestCofig) => BaseResponse<TData, TError>
 */
const RequestHandler =
  <TData, TError = AxiosError, TBody = {}, TParams = {}>(
    request: BaseRequest<TData, TBody, TParams>
  ) =>
  async (
    requestCofig: BaseRequestConfig<TBody, TParams>
  ): BaseResponse<TData, TError> => {
    try {
      const response = await request(requestCofig);
      return {
        code: "success",
        // statusCode: response.status,
        data: response.data,
      };
    } catch (err) {
      // if (isAxiosError(err)) {
      //   return {
      //     code: "error",
      //     statusCode: err.response?.status ? err.response.status : 0,
      //     error: err as TError,
      //   };
      // } else {
      //   return {
      //     code: "error",
      //     statusCode: 0,
      //     error: err as TError,
      //   };
      // }
      return { code: "error", error: err as TError };
    }
  };

export type { BaseRequest, BaseResponse, BaseRequestConfig };
export default RequestHandler;
