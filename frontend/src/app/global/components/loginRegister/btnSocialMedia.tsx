import styled from "styled-components";
import GoogleImg from "../../assets/google.png";
import FacebookImg from "../../assets/Facebook.png";
import Image from "next/image";

type BtnSocialMediaProps = {};

const Container = styled.div`
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  button {
    border: none;
    border-radius: 5px;
    background-color: #2e2e2e;
    margin: 0px 10px;
    width: 70px;
    height: 50px;
  }
  img {
    height: 30px;
    width: 30px;
    background-color: transparent;
  }
`;

export const BtnSocialMedia = ({}: BtnSocialMediaProps) => (
    <Container>
    <button>
      <Image src={FacebookImg} alt="" />
    </button>
    <button>
      <Image src={GoogleImg} alt="" />
    </button>
  </Container>
);
