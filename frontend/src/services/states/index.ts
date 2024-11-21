import { useFetch } from "@/hooks/useFetch";
import useSWRMutation from "swr/mutation";

import { State } from "./types";

export const useFetchStates = () => {
  const url = `/statess`;

  const fetcher = useFetch({
    url,
  });

  const { trigger, data, error, isMutating } = useSWRMutation<State[]>(
    url,
    fetcher,
    {
      onSuccess: (response) => {
        localStorage.setItem("@states", JSON.stringify(response));
      },
    },
  );

  return {
    fetchStates: trigger,
    states: data,
    isStatesValidating: isMutating,
    isStatesError: error,
  };
};
