"use client";

import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
type ImgProps = {
  IconIMG: StaticImageData;
};

const StyledImg = styled.div`
  img{
    height: 200px;
  width: 200px;
  border-radius: 100%;
  justify-self: center;
  margin-bottom: 10px;
  }
`;

export const Img = ({ IconIMG }: ImgProps) => (
  <StyledImg>
    <Image src={IconIMG} alt="Icon" />
  </StyledImg>
);
