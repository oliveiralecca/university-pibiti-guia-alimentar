import { Bounce, toast } from "react-toastify";

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
  const hasClassificacaoAlimentosBlock = hasAtLeastTwoCommonElements(
    wrongQuestions || [],
    templatesWrongAnswers.classificacaoAlimentos,
  );
  const hasComensalidadeBlock = hasAtLeastTwoCommonElements(
    wrongQuestions || [],
    templatesWrongAnswers.comensalidade,
  );
  const hasSistemasAlimentaresBlock = hasAtLeastTwoCommonElements(
    wrongQuestions || [],
    templatesWrongAnswers.sistemasAlimentares,
  );

  const additional: AdditionalResultPages = {
    additionalPage1: null,
    additionalPage2: null,
    additionalPage3: null,
  };

  const { data, error, trigger, isMutating } = useSWRMutation(url, fetcher, {
    onSuccess: (response) => {
      localStorage.setItem(
        "userResult",
        JSON.stringify({ score: response.score, wrongAnswers: wrongQuestions }),
      );

      if (!additional.additionalPage1) {
        if (hasClassificacaoAlimentosBlock) {
          additional.additionalPage1 = "classificacaoAlimentos";
        } else if (hasComensalidadeBlock) {
          additional.additionalPage1 = "comensalidade";
        } else if (hasSistemasAlimentaresBlock) {
          additional.additionalPage1 = "sistemasAlimentares";
        }
      }

      if (!additional.additionalPage2) {
        if (
          hasComensalidadeBlock &&
          additional.additionalPage1 !== "comensalidade"
        ) {
          additional.additionalPage2 = "comensalidade";
        } else if (
          hasSistemasAlimentaresBlock &&
          additional.additionalPage1 !== "sistemasAlimentares"
        ) {
          additional.additionalPage2 = "sistemasAlimentares";
        }
      }

      if (!additional.additionalPage3) {
        if (
          hasSistemasAlimentaresBlock &&
          additional.additionalPage1 !== "sistemasAlimentares" &&
          additional.additionalPage2 !== "sistemasAlimentares"
        ) {
          additional.additionalPage3 = "sistemasAlimentares";
        }
      }

      localStorage.setItem("additionalResultPages", JSON.stringify(additional));
    },
    onError: () => {
      toast.error(
        "Ops! Algo deu errado ao tentar finalizar o Quiz. Tente novamente.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        },
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
