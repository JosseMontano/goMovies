import React from "react";
import { Img } from "./components/img";
import IconIMG from "./assets/IconGo.png";
import { Title } from "./components/title";
import { ButtonRedSocialMap } from "./data/buttonRedSocialJSX";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import { ButtonRedSocial } from "./components/buttonRedSocial";
import { useUser } from "@/store/user";
import { Or } from "./components/or";
import { Btn } from "@/components/btn";
import { TextSignUp } from "./components/textSignUp";
import { colorPrimary } from "@/styles/colors";
import Link from "next/link";

type PageProps = {};

const Page = ({}: PageProps) => {
  const router = useRouter();

  const { loginUser } = useUser();

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    const { email, photoURL, displayName } = user;
    if (email && displayName && photoURL) {
      loginUser({ email, photoURL, displayName });
    }
    router.push("/home");
  };

  const loginFacebook = async () => {
    const provider = new FacebookAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    const { email, photoURL, displayName } = user;
    if (email && displayName && photoURL) {
      loginUser({ email, photoURL, displayName });
    }
    router.push("/home");
  };

  const buttonRedSocialJSX = ButtonRedSocialMap({
    loginGoogle,
    loginFacebook,
  });

  return (
    <div className="container">
      <Img IconIMG={IconIMG} />
      <Title />

      {!!buttonRedSocialJSX.length &&
        buttonRedSocialJSX.map((v, i) => (
          <ButtonRedSocial key={i} img={v.img} msg={v.msg} singIn={v.singIn} />
        ))}
      <Or />
      <Link href={"sign-in"}>
        <Btn colorPrimary={colorPrimary} msg={"Sign in with password"} />
      </Link>
      <TextSignUp colorPrimary={colorPrimary} />
      <style jsx>
        {`
          .container {
            display: grid;
            height: 100vh;
            place-content: center;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default Page;
