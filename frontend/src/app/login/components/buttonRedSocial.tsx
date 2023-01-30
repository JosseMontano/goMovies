import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

type Props = {
  img: StaticImageData;
  msg: string;
  singIn: () => void;
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: none;
  border-radius: 15px;
  border: 1px solid #f2f2f2;
  padding: 15px;
  width: 300px;
  background-color: transparent;
  img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
  &:hover {
    background-color: #f2f2f2;
    color: #000;
    cursor: pointer;
  }
`;

export const ButtonRedSocial = ({ img, msg,singIn }: Props) => (
  <Button onClick={singIn}>
    <Image src={img} alt="" />
    <span>{msg}</span>
  </Button>
);
