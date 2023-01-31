import { create } from "zustand";
import { persist } from "zustand/middleware";
import UserType from "../interfaces/user";

interface Type {
  user: UserType;
  loginUser: (user: UserType) => void;
  logOut: () => void;
}

const userInitialValue: UserType = {
  displayName: "",
  email: "",
  photoURL: "",
};

export const useUser = create(
  persist<Type>(
    (set) => ({
      user: userInitialValue,
      loginUser: (user) => {
        set(() => ({
          user,
        }));
      },
      logOut: () => {
        set(() => ({
          user: userInitialValue,
        }));
      },
    }),
    {
      name: "user",
    }
  )
);
