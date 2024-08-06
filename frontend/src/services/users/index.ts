import { useFetch } from "@/hooks/useFetch";
import { templatesWrongAnswers } from "@/pages/Result/helpers";
import { filterWrongQuestions, hasAtLeastTwoCommonElements } from "@/utils";
import useSWRMutation from "swr/mutation";

import { AdditionalResultPages, User } from "./types";

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
  const hasSistemasAlimentaresBlock = hasAtLeastTwoCommonElements(
    wrongQuestions || [],
    templatesWrongAnswers.sistemasAlimentares,
  );
  const hasClassificacaoAlimentosBlock = hasAtLeastTwoCommonElements(
    wrongQuestions || [],
    templatesWrongAnswers.classificacaoAlimentos,
  );
  const hasComensalidadeBlock = hasAtLeastTwoCommonElements(
    wrongQuestions || [],
    templatesWrongAnswers.comensalidade,
  );

  const additional: AdditionalResultPages = {
    additionalPage1: null,
    additionalPage2: null,
    additionalPage3: null,
  };

  const { data, error, trigger, isMutating } = useSWRMutation(url, fetcher, {
    // TODO: setar estado de erro `onError` -> `setCreateUserError` do contexto
    onSuccess: (response) => {
      localStorage.setItem(
        "userResult",
        JSON.stringify({ score: response.score, wrongAnswers: wrongQuestions }),
      );

      if (!additional.additionalPage1) {
        if (hasSistemasAlimentaresBlock) {
          additional.additionalPage1 = "sistemasAlimentares";
        } else if (hasClassificacaoAlimentosBlock) {
          additional.additionalPage1 = "classificacaoAlimentos";
        } else if (hasComensalidadeBlock) {
          additional.additionalPage1 = "comensalidade";
        }
      }

      if (!additional.additionalPage2) {
        if (
          hasClassificacaoAlimentosBlock &&
          additional.additionalPage1 !== "classificacaoAlimentos"
        ) {
          additional.additionalPage2 = "classificacaoAlimentos";
        } else if (
          hasComensalidadeBlock &&
          additional.additionalPage1 !== "comensalidade"
        ) {
          additional.additionalPage2 = "comensalidade";
        }
      }

      if (!additional.additionalPage3) {
        if (
          hasComensalidadeBlock &&
          additional.additionalPage1 !== "comensalidade" &&
          additional.additionalPage2 !== "comensalidade"
        ) {
          additional.additionalPage3 = "comensalidade";
        }
      }

      localStorage.setItem("additionalResultPages", JSON.stringify(additional));
    },
  });

  return {
    data,
    isCreatingUser: isMutating,
    isCreateUserError: error,
    createUser: trigger,
  };
};
