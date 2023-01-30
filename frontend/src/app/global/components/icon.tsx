import { StaticImageData } from "next/image";
import styled from "styled-components";
import Image from "next/image";

type IconProps = {
  IconImg: StaticImageData;
};

const Container = styled.div`
  img {
    background-color: transparent;
    width: 150px;
    height: 150px;
    justify-self: center;
  }
`;

export const Icon = ({ IconImg }: IconProps) => (
  <Container>
    <Image src={IconImg} alt="icon" />
  </Container>
);
