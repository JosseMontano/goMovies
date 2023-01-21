import styled from "styled-components";
import { colorPrimary } from "@/global/styles/colors";
type FooterProps = {
  signIn: () => void;
};

const Container = styled.p<{ colorPrimary: string }>`
  span {
    cursor: pointer;
    color: ${(p) => p.colorPrimary};
  }
`;

export const Footer = ({ signIn }: FooterProps) => (
  <Container colorPrimary={colorPrimary}>
    Already have an account? <span onClick={signIn}>Sign In</span>
  </Container>
);
