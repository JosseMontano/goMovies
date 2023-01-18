import React from "react";
import styled from "styled-components";

type OrProps = {};

const Container = styled.p`
  border-top: 1px solid blue;
  margin-top: 10px;

`;

export const Or = ({}: OrProps) => (
  <Container>
    <span>or</span>
  </Container>
);
