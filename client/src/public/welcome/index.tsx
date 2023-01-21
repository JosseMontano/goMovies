import styled from "styled-components";
import Img from "./assets/theatherBillbord.jpeg";
import { Btn } from "@/global/components/btn";
import { colorPrimary } from "@/global/styles/colors";
import { NavLink } from "react-router-dom";
type IndexProps = {};

const StyledCard = styled.div`
  height: 100vh;
  img {
    width: 100%;
    height: 99.6%;
    object-fit: cover;
    filter: brightness(50%);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  position: absolute;
  top: 78%;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  h2 {
    background-color: transparent;
    font-size: 32px;
  }
  p {
    font-size: 22px;
    background-color: transparent;
  }
`;

export const Index = ({}: IndexProps) => (
  <StyledCard>
    <img src={Img} alt="" />
    <Container>
      <h2>Welcome to GoMovies</h2>
      <p>The best movie streaming app the century to make your days great!</p>
      <NavLink to="/login">
        <Btn colorPrimary={colorPrimary} msg="Get started" />
      </NavLink>
    </Container>
  </StyledCard>
);
