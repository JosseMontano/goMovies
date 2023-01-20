import styled from "styled-components";
import IconImg from "./assets/React.png";
import GoogleImg from "@/global/assets/google.png";
import FacebookImg from "@/global/assets/Facebook.png";
import { colorPrimary } from "@/global/styles/colors";
import { Btn } from "@/global/components/btn";
import { MdEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

type IndexProps = {};

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  form {
    display: grid;
    margin-top: 10px;
  }
  /*   input {
    margin: 5px 0px;
    border: none;
    height: 32px;
    border-radius: 7px;
    background-color: #2e2e2e;
  } */
  img {
    width: 150px;
    justify-self: center;
  }
`;

const ContainerBtn = styled.div`
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

const ContainerCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    margin: 5px 0px;
    border: none;
    height: 32px;
    border-radius: 7px;
    border: 1px solid red;
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 7px;
  div {
    padding: 10px;
    background-color: #2e2e2e;
    color: white;
    min-width: 50px;
    text-align: center;
  }
  input {
    border: none;
    width: 100%;
    padding: 10px;
    outline: none;
    background-color: #2e2e2e;
  }
`;

export const Index = ({}: IndexProps) => {
  const navigate = useNavigate();

  const signIn = () => {
    navigate("/sign-in");
  };

  return (
    <Container>
      <img src={IconImg} alt="" />
      <h2>Create your Account</h2>
      <form action="">
        <InputContainer>
          <div>
            <MdEmail
              className="icon"
              style={{ backgroundColor: "transparent" }}
              size={"20px"}
            />
          </div>
          <input type="text" placeholder="Email" />
        </InputContainer>

        <InputContainer>
          <div>
            <GiPadlock
              className="icon"
              style={{ backgroundColor: "Transparent" }}
              size={"20px"}
            />
          </div>
          <input type="text" placeholder="password" />
          <div>
            <AiTwotoneEyeInvisible
              className="icon"
              style={{ backgroundColor: "transparent" }}
              size={"20px"}
            />
          </div>
        </InputContainer>

        <ContainerCheck>
          <input type={"checkbox"} /> Remember me
        </ContainerCheck>
        <Btn colorPrimary={colorPrimary} msg={"Sign up"} />
      </form>
      <p>Or continue with</p>
      <ContainerBtn>
        <button>
          <img src={FacebookImg} alt="" />
        </button>
        <button>
          <img src={GoogleImg} alt="" />
        </button>
      </ContainerBtn>
      <p>
        Already have an account? <span onClick={signIn}>Sign In</span>
      </p>
    </Container>
  );
};
