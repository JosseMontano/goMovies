"use client";

import React, { useState } from "react";
import styled from "styled-components";
import {
  Icon,
  Title,
  BtnSocialMedia,
} from "../global/components/loginRegister";
import { Footer } from "./components/footer";
import SingUpType from "./interfaces/signUp";
import { IndexForm } from "./components/form";
import { useRouter } from "next/navigation";
import { useUser } from "../global/store/user";
import { signUpApi } from "./api/auth";
import UserType from "../global/interfaces/user";

type PageProps = {};

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  form {
    display: grid;
    margin-top: 10px;
    max-width: 300px;
  }
`;

const StyledOr = styled.p`
  margin-top: 10px;
`;

const Page = ({}: PageProps) => {
  const router = useRouter();
  const { loginUser } = useUser();
const [loading, setLoading] = useState(false)

  const handleSubmit = async (val: SingUpType) => {
    setLoading(true)
    const { accept_conditions: _, ...newObj } = val;
    const res = await signUpApi(newObj)
    console.log(res) 
    setLoading(false)
    /* 
            loginUser(data);
        push("/home");
    */
  };

  return (
    <Container>
      <Icon />

      <Title msg={"Create your Account"} />

   <IndexForm handleSubmit={handleSubmit} isLoading={loading} /> 

      <StyledOr>Or continue with</StyledOr>
 


      <BtnSocialMedia />

      <Footer signIn={() => {}} />
    </Container>
  );
};

export default Page;

 {/*      {isError && <p className="error">{msgError}</p>}   */}