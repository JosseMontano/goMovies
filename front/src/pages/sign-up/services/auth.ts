import { fetchPost } from "@/utilities/fetchPost";

export const signUpApi = async <T, S>(user: T) => {
  const { data, error } = await fetchPost<T, S>(user, "sign-up");
  return {
    data,
    error,
  };
};
