import api from "@/app/global/api/config";
import SingUpType from "../interfaces/signUp";

export const signUpApi = async (user: SingUpType) => {
  try {
    const res = await api.post("sign-up", user);
    return {
      data:res.data,
      error:null
    };
  } catch (error: any) {
    return {
      data:null,
      error:error.response.data.Message
    };
  }
};
