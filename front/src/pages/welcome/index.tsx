"use client";

import styled from "styled-components";
import Img from "./assets/theatherBillbord.jpeg";
import { Btn } from "@/components/btn";
import { colorPrimary } from "@/styles/colors";
import Link from "next/link";
import Image from "next/image";

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

const Index = ({}: IndexProps) => (
  <StyledCard>
    <Image src={Img} alt="" />
    <Container>
      <h2>Welcome to GoMovies</h2>
      <p>The best movie streaming app the century to make your days great!</p>
      <Link href="/login">
        <Btn colorPrimary={colorPrimary} msg="Get started" />
      </Link>
    </Container>
  </StyledCard>
);

export default Index;
