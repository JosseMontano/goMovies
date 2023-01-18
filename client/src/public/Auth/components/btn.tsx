import React from "react";
import styled from "styled-components";

type BtnProps = {
  colorPrimary: string;
};

const Container = styled.button<{ colorPrimary: string }>`
  background-color: ${(p) => p.colorPrimary};
  border: none;
  border-radius: 25px;
  width: 300px;
  height: 50px;
  margin-top: 10px;
`;

export const Btn = ({ colorPrimary }: BtnProps) => (
  <Container colorPrimary={colorPrimary}>Sign in with password</Container>
);
