import Image from "next/image";
import styled from "styled-components";
import IconImg from "../../assets/React.png";
type IconProps = {};

const Container = styled.div`
  img {
    background-color: transparent;
    width: 150px;
    height: 150px;
    justify-self: center;
    /*   animation-name: rotateImg;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear; */
    animation: rotateImg 10s infinite linear;

    @keyframes rotateImg {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export const Icon = ({}: IconProps) => (
  <Container data-testid="icon">
    <Image src={IconImg} alt="Icon app" />
  </Container>
);
