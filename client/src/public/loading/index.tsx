import styled from "styled-components";
import Img from "@/global/assets/React.png";
import { Icon } from "./components/icon";
import { Loader } from "./components/loader";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: grid;
  height: 100vh;
  place-content: center;
`;
type IndexProps = {};

export const Index = ({}: IndexProps) => {
  let navigate = useNavigate();

  setTimeout(() => {
    navigate("/welcome");
  }, 3000);

  return (
    <Container>
      <Loader />
      <div>
        <Icon IconImg={Img} />
      </div>
    </Container>
  );
};
