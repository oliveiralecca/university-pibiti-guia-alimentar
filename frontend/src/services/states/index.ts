import { useFetch } from "@/hooks/useFetch";
import useSWRMutation from "swr/mutation";

import { State } from "./types";

export const useFetchStates = () => {
  const url = `/states`;

  const fetcher = useFetch({
    url,
  });

  const { trigger, data, error, isMutating } = useSWRMutation<State[]>(
    url,
    fetcher,
  );

  return {
    fetchStates: trigger,
    states: data,
    isStatesValidating: isMutating,
    isError: error,
  };
};
