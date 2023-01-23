import styled from "styled-components";

type ContainerBtnProps = {
  FacebookImg: string;
  GoogleImg: string;
};

const Container = styled.div`
  margin: 10px 10px;
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

export const ContainerBtn = ({ FacebookImg, GoogleImg }: ContainerBtnProps) => (
  <Container>
    <button>
      <img src={FacebookImg} alt="" />
    </button>
    <button>
      <img src={GoogleImg} alt="" />
    </button>
  </Container>
);
