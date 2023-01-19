import GoogleImg from "../assets/google.png";

type Params = {
  loginWithRedirect: () => void;
};

export const ButtonRedSocialMap = ({ loginWithRedirect }: Params) => {
  return [
    {
      img: GoogleImg,
      msg: "Continue with Google",
      singIn: () => loginWithRedirect(),
    },
  ];
};

