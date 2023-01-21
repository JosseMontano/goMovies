import React from "react";
import styled from "styled-components";

type TitleProps = {
  msg: string;
};

const StyledTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Title = ({ msg }: TitleProps) => <StyledTitle>{msg}</StyledTitle>;
