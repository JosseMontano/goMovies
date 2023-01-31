import api from "@/app/global/api/config";
import SingUpType from "../interfaces/signUp";

export const signUpApi = async (user: SingUpType) => {
  try {
    const res = await api.post("sign-up", user);
    return res.data;
  } catch (error: any) {
    throw new Error(error.response.data.Message);
  }
};
