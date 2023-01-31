import GoogleImg from "@/assets/google.png";
import FacebookImg from "@/assets/Facebook.png";

type Params = {
  loginGoogle: () => void;
  loginFacebook: () => void;
};

export const ButtonRedSocialMap = ({ loginGoogle, loginFacebook }: Params) => {
  return [
    {
      img: GoogleImg,
      msg: "Continue with Google",
      singIn: () => loginGoogle(),
    },
    {
      img: FacebookImg,
      msg: "Continue with Facebook",
      singIn: () => loginFacebook(),
    },
  ];
};
