import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Footer } from "./components/footer";
import SingUpType from "./interfaces/signUp";
import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "./api/auth";
import { useState } from "react";
import { useUser } from "@/global/store/user";
import UserType from "@/global/interfaces/user";
import { IndexForm } from "./components/form";
import {
  BtnSocialMedia,
  Icon,
  Title,
} from "@/global/components/loginRegister/";

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

type IndexProps = {};

export const Index = ({}: IndexProps) => {
  const navigate = useNavigate();
  const { loginUser } = useUser();
  const [msgError, setMsgError] = useState("");

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: signUpApi,
    onError: (error) => {
      if (error instanceof Error) {
        setMsgError(error.message);
      }
    },
  });

  const handleSubmit = (val: SingUpType) => {
    const { accept_conditions: _, ...newObj } = val;
    mutate(newObj, {
      onSuccess: (data: UserType) => {
        loginUser(data);
        navigate("/home");
      },
    });
  };

  const signIn = () => {
    navigate("/sign-in");
  };

  return (
    <Container>
      <Icon />

      <Title msg={"Create your Account"} />

      <IndexForm handleSubmit={handleSubmit} isLoading={isLoading} />

      <StyledOr>Or continue with</StyledOr>

      {isError && <p className="error">{msgError}</p>}

      <BtnSocialMedia />

      <Footer signIn={signIn} />
    </Container>
  );
};
