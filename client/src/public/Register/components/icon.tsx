import styled from "styled-components";

type IconProps = {
  IconImg: string;
};

const Img = styled.img`
  background-color: transparent;
  width: 150px;
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
`;

export const Icon = ({ IconImg }: IconProps) => <Img src={IconImg} />;
