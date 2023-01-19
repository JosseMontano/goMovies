import create from "zustand";
import { persist } from "zustand/middleware";

interface UserType {
  email: string;
  name: string;
  nickName: string;
  picture: string;
}

interface Type {
  user: UserType;
  loginUser: (user: UserType) => void;
  logOut:()=>void
}

const initialValueUser: UserType = {
  email: "",
  name: "",
  nickName: "",
  picture: "",
};

export const useUser = create(
  persist<Type>(
    (set) => ({
      user: initialValueUser,
      loginUser: (user: UserType) => {
        set(() => ({
          user,
        }));
      },
      logOut: () => {
        set(() => ({
          user: initialValueUser,
        }));
      },
    }),
    {
      name: "user",
    }
  )
);
