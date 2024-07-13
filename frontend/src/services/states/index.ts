import { useFetch } from "@/hooks/useFetch";
import useSWR from "swr";

import { State } from "./types";

export const useFetchStates = () => {
  const url = `/states`;

  const fetcher = useFetch({
    url,
  });

  const { data, error, isValidating } = useSWR<State[]>(url, fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  return {
    data,
    isValidating,
    isError: error,
  };
};
