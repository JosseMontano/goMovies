"use client";

import styled from "styled-components";

type TextSignUpProps = {
  colorPrimary: string;
  redirecToCreateAccount: () => void;
};

const StyledSignUp = styled.p<{ colorPrimary: string }>`
  margin-top: 10px;
  span {
    color: ${(p) => p.colorPrimary};
  }
`;

export const TextSignUp = ({
  colorPrimary,
  redirecToCreateAccount,
}: TextSignUpProps) => (
  <StyledSignUp colorPrimary={colorPrimary}>
   {" Don't have an account? "} <span onClick={redirecToCreateAccount}>{"sign up"}</span>
  </StyledSignUp>
);
