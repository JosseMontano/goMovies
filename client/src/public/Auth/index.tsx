import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import IconIMG from "./assets/Icon.jpg";
import FacebookImg from "./assets/Facebook.png";
import GoogleImg from "./assets/google.png";
import { colorPrimary } from "../../global/styles/colors";
import { Img } from "./components/img";
import { Title } from "./components/title";
import { ButtonRedSocial } from "./components/buttonRedSocial";
import { Or } from "./components/or";
import { Btn } from "./components/btn";
import { TextSignUp } from "./components/textSignUp";
import { useUser } from "../../global/store/user";

type buttonRedSocialJSXType = {
  img: string;
  msg: string;
  singIn: () => void;
};

const Container = styled.div`
  display: grid;
  height: 100vh;
  place-content: center;
  text-align: center;
`;

export const Index = () => {
  const { loginWithRedirect, user: userGoogle } = useAuth0();
  const { user, loginUser } = useUser();

  const signInFace = () => {};

  const loginWithGoogle = () => {
    loginWithRedirect();
    if (userGoogle) {
      let newUser = {
        email: userGoogle.email!,
        name: userGoogle.name!,
        nickName: userGoogle.nickname!,
        picture: userGoogle.picture!,
      };
      loginUser(newUser);
    }
  };

  const buttonRedSocialJSX: buttonRedSocialJSXType[] = [
    {
      img: FacebookImg,
      msg: "Continue with Facebook",
      singIn: () => signInFace(),
    },
    {
      img: GoogleImg,
      msg: "Continue with Google",
      singIn: () => loginWithGoogle(),
    },
  ];

  return (
    <Container>
      <Img IconIMG={IconIMG} />
      <Title />

      {!!buttonRedSocialJSX.length &&
        buttonRedSocialJSX.map((v) => (
          <ButtonRedSocial
            key={v.img}
            img={v.img}
            msg={v.msg}
            singIn={v.singIn}
          />
        ))}

      <Or />
      <Btn colorPrimary={colorPrimary} />
      <TextSignUp colorPrimary={colorPrimary} />
    </Container>
  );
};
