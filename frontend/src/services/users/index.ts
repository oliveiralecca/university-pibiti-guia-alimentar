import { useFetch } from "@/hooks/useFetch";
import useSWRMutation from "swr/mutation";

import { User } from "./types";

export const useCreateUser = (
  type: "school" | "university" | undefined,
  newUser: User,
) => {
  // const [successMsg, setSuccessMsg] = useState("");

  const url = type && type === "school" ? "/users/school" : "/users/ufs";

  const fetcher = useFetch({
    method: "post",
    url,
    data: newUser,
  });

  const { data, error, trigger, isMutating } = useSWRMutation(url, fetcher, {
    onSuccess: (response) => {
      console.log(response);
    },
  });

  return {
    data,
    // successMsg,
    isCreatingUser: isMutating,
    isError: error,
    createUser: trigger,
  };
};
