import SingUpType from "../interfaces/signUp";
import { url } from "@/pages/config";

export const signUpApi = async (user: SingUpType) => {
  let error = "";

  const response = await fetch(`${url}sign-up`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
      display_name: user.display_name,
    }),
  });


  if (response.ok) {
    const result = await response.json();
    return {
      data: result,
      error: null,
    };
  }

  const resError = await response.json();
  error = resError.Message;

  return {
    data: null,
    error: error,
  };
};
