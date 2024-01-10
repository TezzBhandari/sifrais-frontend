import { AxiosError, AxiosResponse, isAxiosError } from "axios";

// TYPE: BASE REQUEST COFIGURATION TYPE
interface BaseRequestConfig<TBody = {}, TParams = {}> {
  url: string;
  httpMethod: "get" | "post" | "put" | "patch" | "delete" | "options";
  params?: TParams;
  // headers?: RawAxiosRequestHeaders | AxiosHeaders | Partial<HeadersDefaults>;
  headers?: any;
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
        console.log("\naxios error logged in request handler:\n", err);

        if (err.response) {
          console.log(
            "\nerror from the server; logged inr request handler; responseObject: \n",
            err.response
          );

          return {
            code: "error",
            errorName: err.name,
            errorMessage: err.message,
            statusCode: err.response.status,
            error: err.response.data as TError,
          };
        }
        if (err.request) {
          console.log(
            "\nrequest was made but no response was receieved;  requestObject: \n",
            err.request
          );
          return {
            code: "error",
            errorName: err.name,
            errorMessage: "request didn't reach server",
            error: err.request,
          };
        }
        console.log(
          "Something happened in setting up the request that triggered an Error",
          err
        );
        return {
          code: "error",
          errorName: "Unknown Error",
          errorMessage: "Something Went Wrong. Try Again!",
        };
      } else {
        console.log("\nnot an axios error : ,  \n\n", err);
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
