import { fetchPost } from "@/utilities/fetchPost";

export const signUpApi = async <T>(user: T) => {
  const { data, error } = await fetchPost(user, "sign-up");
  return {
    data,
    error,
  };
};
