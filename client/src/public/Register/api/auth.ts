import api from "@/global/api/config";
import UserType from "@/global/interfaces/user";

export const signUp = (user: UserType) => api.post("sign-up", user);
