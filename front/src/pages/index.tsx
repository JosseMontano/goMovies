import { useRouter } from "next/router";
import styled from "styled-components";
import { Icon } from "./index/components/icon";
import { Loader } from "./index/components/loader";
import ImgReact from "@/assets/react.png";

const Container = styled.div`
  display: grid;
  height: 100vh;
  place-content: center;
`;

export default function Home() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/welcome");
  }, 3000);
  return (
    <Container>
      <Loader />
      <div>
        <Icon IconImg={ImgReact} />
      </div>
    </Container>
  );
}
