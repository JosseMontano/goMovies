import create from "zustand";

interface UserType {
  email: string;
  name: string;
  nickName: string;
  picture: string;
}

interface Type {
  user: UserType;
  loginUser: (user: UserType) => void;
}

const initialValue: UserType = {
  email: "",
  name: "",
  nickName: "",
  picture: "",
};

export const useUser = create<Type>((set) => ({
  user: initialValue,
  loginUser: (user: UserType) => {
    set(() => ({
      user,
    }));
  },
}));
