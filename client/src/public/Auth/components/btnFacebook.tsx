import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../global/store/user";
import FacebookImg from "../assets/Facebook.png";
import { ButtonRedSocial } from "./buttonRedSocial";

type BtnFacebookProps = {};

export const BtnFacebook = ({}: BtnFacebookProps) => {
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const responseFacebook = (response: any) => {
    const { name, email, picture } = response;
    console.log(response)
    loginUser({ email, name, picture: picture.data.url, nickName: name });
    navigate("/home");
  };

  return (
    <FacebookLogin
      appId="544370104287931"
      autoLoad={false}
      callback={responseFacebook}
      render={(p) => (
        <ButtonRedSocial
          img={FacebookImg}
          msg={"Continue with Facebook"}
          singIn={p.onClick}
        />
      )}
    />
  );
};
