import { api } from "@/infra/api/axios";
import { AxiosError, AxiosRequestConfig } from "axios";

export function useFetch({
  method = "get",
  url,
  data,
  headers,
}: AxiosRequestConfig) {
  const fetcher = async () => {
    try {
      const response = await api({
        method,
        url,
        data,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });

      return response.data || [];
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        if (err.response && Object.keys(err.response).length > 0) {
          throw new Error(JSON.stringify(err.response.data));
        }

        throw new Error(err.message);
      }

      throw err;
    }
  };

  return fetcher;
}
