import { useQuizContext } from "@/contexts/QuizContext";
import { useFetch } from "@/hooks/useFetch";
import useSWRMutation from "swr/mutation";

import { User } from "./types";

export const useCreateUser = (
  type: "school" | "university" | undefined,
  newUser: User,
) => {
  const { setScore } = useQuizContext();

  const url = type && type === "school" ? "/users/school" : "/users/ufs";

  const fetcher = useFetch({
    method: "post",
    url,
    data: newUser,
  });

  const { data, error, trigger, isMutating } = useSWRMutation(url, fetcher, {
    onSuccess: (response) => {
      setScore(response.score);
    },
  });

  return {
    data,
    isCreatingUser: isMutating,
    isError: error,
    createUser: trigger,
  };
};
