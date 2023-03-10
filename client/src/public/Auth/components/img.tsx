import styled from "styled-components";

type ImgProps = {
  IconIMG: string;
};

const StyledImg = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  justify-self: center;
  margin-bottom: 10px;
`;

export const Img = ({ IconIMG }: ImgProps) => (
  <StyledImg src={IconIMG} alt="" />
);
