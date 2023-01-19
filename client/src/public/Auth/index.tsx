import styled from "styled-components";
import IconIMG from "./assets/Icon.jpg";
import { colorPrimary } from "../../global/styles/colors";
import { Img } from "./components/img";
import { Title } from "./components/title";
import { ButtonRedSocial } from "./components/buttonRedSocial";
import { Or } from "./components/or";
import { Btn } from "./components/btn";
import { TextSignUp } from "./components/textSignUp";
import { useUser } from "../../global/store/user";
import { useNavigate } from "react-router-dom";
import { ButtonRedSocialMap } from "./data/buttonRedSocialJSX";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";

const Container = styled.div`
  display: grid;
  height: 100vh;
  place-content: center;
  text-align: center;
`;

export const Index = () => {
  const { loginUser, user } = useUser();
  const navigate = useNavigate();

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    const { email, photoURL, displayName } = user;
    if (email && displayName && photoURL) {
      loginUser({ email, photoURL, displayName });
    }
    navigate("/home");
  };

  const loginFacebook = async () => {
    const provider = new FacebookAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    const { email, photoURL, displayName } = user;
    if (email && displayName && photoURL) {
      loginUser({ email, photoURL, displayName });
    }
    navigate("/home");
  };

  const buttonRedSocialJSX = ButtonRedSocialMap({
    loginGoogle,
    loginFacebook,
  });

  if (user.email != "") {
    navigate("/home");
  }

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
