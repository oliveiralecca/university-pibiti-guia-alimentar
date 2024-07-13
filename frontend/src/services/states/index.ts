import { useFetch } from "@/hooks/useFetch";
import useSWRImmutable from "swr/immutable";

import { State } from "./types";

export const useFetchStates = () => {
  const url = `/states`;

  const fetcher = useFetch({
    url,
  });

  const { data, error, isValidating } = useSWRImmutable<State[]>(url, fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  return {
    data,
    isValidating,
    isError: error,
  };
};
