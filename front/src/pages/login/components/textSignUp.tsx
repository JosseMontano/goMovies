"use client";

import Link from "next/link";
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
    Don't have an account?
    <Link href={"sign-up"}>
      <span>sign up</span>
    </Link>
  </StyledSignUp>
);
