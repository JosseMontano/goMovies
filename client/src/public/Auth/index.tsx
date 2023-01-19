import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import IconIMG from "./assets/Icon.jpg";
import { colorPrimary } from "../../global/styles/colors";
import { Img } from "./components/img";
import { Title } from "./components/title";
import { ButtonRedSocial } from "./components/buttonRedSocial";
import { Or } from "./components/or";
import { Btn } from "./components/btn";
import { TextSignUp } from "./components/textSignUp";
import { useUser } from "../../global/store/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonRedSocialMap } from "./data/buttonRedSocialJSX";

const Container = styled.div`
  display: grid;
  height: 100vh;
  place-content: center;
  text-align: center;
`;

export const Index = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const { loginUser, user: UserStore } = useUser();
  const signInFace = () => {};
  const navigate = useNavigate();

  if (UserStore.email != "") {
    navigate("/home");
  }

  useEffect(() => {
    if (user) {
      const { email, name, nickname: nickName, picture } = user;
      if (email && name && picture && nickName) {
        loginUser({ email, name, nickName, picture });
      }
    }
  }, [isAuthenticated]);

  const buttonRedSocialJSX = ButtonRedSocialMap({
    loginWithRedirect,
    signInFace,
  });

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
