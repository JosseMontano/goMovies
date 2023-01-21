import styled from "styled-components";

type IconProps = {
  IconImg: string;
};

const Img = styled.img`
  width: 150px;
  justify-self: center;
`;

export const Icon = ({ IconImg }: IconProps) => <Img src={IconImg} />;
