import styled from "styled-components";

type OrProps = {};

const Container = styled.p`
  margin-top: 10px;
  position: relative;
  &::after {
    position: absolute;
    top: 50%;
    display: block;
    content: "";
    width: 100%;
    border-top: 1px solid #fff;
  }
  span {
    margin: 3px;
    background-color: #242424;
  }
`;

export const Or = ({}: OrProps) => (
  <Container>
    <span>or</span>
  </Container>
);
