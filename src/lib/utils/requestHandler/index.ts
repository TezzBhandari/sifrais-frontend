import {
  AxiosError,
  AxiosRequestHeaders,
  AxiosResponse,
  isAxiosError,
} from "axios";

// TYPE: BASE REQUEST COFIGURATION TYPE
interface BaseRequestConfig<TBody = {}, TParams = {}> {
  url: string;
  httpMethod: "get" | "post" | "put" | "patch" | "delete" | "options";
  params?: TParams;
  headers?: AxiosRequestHeaders;
  body?: TBody;
}

// TYPE: BASE REQUEST
type BaseRequest<TData, TBody = {}, TParams = {}> = (
  requestConfig: BaseRequestConfig<TBody, TParams>
) => Promise<AxiosResponse<TData>>;

// SUCCESS RESPONSE TYPE
type SuccessResponse<TData> = {
  code: "success";
  statusCode: number;
  data: TData;
};

// ERROR RESPONSE TYPE
type ErrorResponse<TError = AxiosError> = {
  code: "error";
  errorName: string;
  errorMessage: string;
  statusCode?: number;
  error?: TError;
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
        statusCode: response.status,
        data: response.data,
      };
    } catch (err) {
      if (isAxiosError(err)) {
        if (err.response) {
          return {
            code: "error",
            errorName: err.name,
            errorMessage: err.message,
            statusCode: err.response.status,
            error: err.response.data as TError,
          };
        }
        if (err.request) {
          return {
            code: "error",
            errorName: err.name,
            errorMessage: err.message,
            error: err.request,
          };
        }
        return {
          code: "error",
          errorName: "Unknown Error",
          errorMessage: "Something Went Wrong. Try Again!",
        };
      } else {
        return {
          code: "error",
          errorName: "Unknown Error",
          errorMessage: "Something Went Wrong. Try Again!",
        };
      }
    }
  };

export type { BaseRequest, BaseResponse, BaseRequestConfig };

export default RequestHandler;
