import { useFetch } from "@/hooks/useFetch";
import useSWRMutation from "swr/mutation";

import { Course } from "./types";

export const useFetchCourses = () => {
  const url = `/courses`;

  const fetcher = useFetch({
    url,
  });

  const { trigger, data, error, isMutating } = useSWRMutation<Course[]>(
    url,
    fetcher,
  );

  return {
    fetchCourses: trigger,
    courses: data,
    isCoursesValidating: isMutating,
    isCoursesError: error,
  };
};
