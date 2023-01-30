"use client";

import React from "react";
import styled from "styled-components";
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
import { useUser } from "../global/store/user";

type PageProps = {};

const Containter = styled.div`
  display: grid;
  height: 100vh;
  place-content: center;
  text-align: center;
`;

const Page = ({}: PageProps) => {
  const router = useRouter();


  const {loginUser} = useUser()

  function validateFormWithJS(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nameQuery = (document.querySelector("#name") as HTMLInputElement)
      .value;
    const rollNumber = (
      document.querySelector("#rollNumber") as HTMLInputElement
    ).value;

    if (!nameQuery) {
      alert("Please enter your name.");
      return false;
    }

    if (rollNumber.length < 3) {
      alert("Roll Number should be at least 3 digits long.");
      return false;
    }
  }

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
    <Containter>
      {/*       <form onSubmit={validateFormWithJS}>
        <label>Roll Number:</label>
        <input type="text" name="rollNumber" id="rollNumber" />

        <label>Name:</label>
        <input type="text" name="name" id="name" />

        <button type="submit">Submit</button>
      </form> */}
      <Img IconIMG={IconIMG} />
      <Title />

      {!!buttonRedSocialJSX.length &&
        buttonRedSocialJSX.map((v, i) => (
            <ButtonRedSocial key={i} img={v.img} msg={v.msg} singIn={v.singIn} />
        ))}
    </Containter>
  );
};

export default Page;
