import { useFetch } from "@/hooks/useFetch";
import { filterWrongQuestions } from "@/utils";
import useSWRMutation from "swr/mutation";

import { User } from "./types";

export const useCreateUser = (
  type: "school" | "university" | undefined,
  newUser: User,
) => {
  const url = type && type === "school" ? "/users/school" : "/users/ufs";

  const fetcher = useFetch({
    method: "post",
    url,
    data: newUser,
  });

  const wrongQuestions = filterWrongQuestions(newUser.quiz);

  const { data, error, trigger, isMutating } = useSWRMutation(url, fetcher, {
    onSuccess: (response) => {
      localStorage.setItem(
        "userResult",
        JSON.stringify({ score: response.score, wrongAnswers: wrongQuestions }),
      );
    },
  });

  return {
    data,
    isCreatingUser: isMutating,
    isCreateUserError: error,
    createUser: trigger,
  };
};
