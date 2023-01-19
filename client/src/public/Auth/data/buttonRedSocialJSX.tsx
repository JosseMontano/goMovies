import FacebookImg from "../assets/Facebook.png";
import GoogleImg from "../assets/google.png";

type Params = {
  signInFace: () => void;
  loginWithRedirect: () => void;
};

export const ButtonRedSocialMap = ({ loginWithRedirect, signInFace }: Params) => {
  return [
    {
      img: FacebookImg,
      msg: "Continue with Facebook",
      singIn: () => signInFace(),
    },
    {
      img: GoogleImg,
      msg: "Continue with Google",
      singIn: () => loginWithRedirect(),
    },
  ];
};

