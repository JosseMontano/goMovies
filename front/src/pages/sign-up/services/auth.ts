import SingUpType from "../interfaces/signUp";
import { url } from "@/pages/config";

export const signUpApi = async (user: SingUpType) => {
  let error = "";
  try {
    const response = await fetch(`${url}sign-up`, {
      method: "POST",
      headers: {},
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
        display_name: user.display_name,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      return {
        data: result,
        error: null,
      };
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
      error = err.message;
    }
  }
  return {
    data: null,
    error: error,
  };
};
