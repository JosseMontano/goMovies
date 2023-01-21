import styled from "styled-components";

type IconProps = {
  IconImg: string;
};

const Img = styled.img`
  background-color: transparent;
  width: 150px;
  justify-self: center;
`;

export const Icon = ({ IconImg }: IconProps) => <Img src={IconImg} />;
