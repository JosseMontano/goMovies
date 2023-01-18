import React from "react";
import styled from "styled-components";

type TextSignUpProps = {
  colorPrimary: string;
};

const StyledSignUp = styled.p<{ colorPrimary: string }>`
  margin-top: 10px;
  span {
    color: ${(p) => p.colorPrimary};
  }
`;

export const TextSignUp = ({ colorPrimary }: TextSignUpProps) => (
  <StyledSignUp colorPrimary={colorPrimary}>
    Don't have an account? <span>sign up</span>
  </StyledSignUp>
);
