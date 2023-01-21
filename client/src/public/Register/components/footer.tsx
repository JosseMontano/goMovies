import React from "react";
import styled from "styled-components";

type FooterProps = {
  signIn: () => void;
};

const Container = styled.p``;

export const Footer = ({ signIn }: FooterProps) => (
  <Container>
    Already have an account? <span onClick={signIn}>Sign In</span>
  </Container>
);
