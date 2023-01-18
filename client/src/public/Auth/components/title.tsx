import styled from "styled-components";

type TitleProps = {};

const StyledTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 10px;
`;

export const Title = ({}: TitleProps) => (
  <StyledTitle>Let's you in</StyledTitle>
);
