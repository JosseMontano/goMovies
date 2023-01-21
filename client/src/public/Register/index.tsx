import styled from "styled-components";
import IconImg from "./assets/React.png";
import GoogleImg from "@/global/assets/google.png";
import FacebookImg from "@/global/assets/Facebook.png";
import { colorPrimary } from "@/global/styles/colors";
import { Btn } from "@/global/components/btn";
import { useNavigate } from "react-router-dom";
import { Icon } from "./components/icon";
import { Title } from "./components/title";
import { ContainerBtn } from "./components/containerBtn";
import { Footer } from "./components/footer";
import UserType from "@/global/interfaces/user";
import { Formik, Form, ErrorMessage } from "formik";
import MyTextInput from "@/global/components/myTextInput";
import { customForm } from "./data/customForm";
import signUp from "./validations/signUp";

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  form {
    display: grid;
    margin-top: 10px;
  }
  img {
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
  margin-top: 10px;
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

type IndexProps = {};

const initialValues: { [key: string]: any } = {};

for (const input of customForm) {
  initialValues[input.name] = input.value;
}

export const Index = ({}: IndexProps) => {
  const navigate = useNavigate();

  const handleSubmit = () => {};

  const signIn = () => {
    navigate("/sign-in");
  };

  return (
    <Container>
      <Icon IconImg={IconImg} />
      <Title msg={"Create your Account"} />

      <Formik
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={signUp}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        <Form noValidate>
          {customForm.map((v) => {
            return (
              <>
                <InputContainer key={v.name}>
                  <div>{<v.icon />}</div>
                  <MyTextInput
                    name={v.name}
                    placeholder={v.placeholder}
                    type={v.type}
                  />
                  {v.extra}
                </InputContainer>
                <ErrorMessage name={v.name} component="p" className="error" />
              </>
            );
          })}
          <ContainerCheck>
            <input type={"checkbox"} /> Remember me
          </ContainerCheck>
          <Btn colorPrimary={colorPrimary} msg={"Sign up"} />
        </Form>
      </Formik>

      <p>Or continue with</p>

      <ContainerBtn FacebookImg={FacebookImg} GoogleImg={GoogleImg} />

      <Footer signIn={signIn} />
    </Container>
  );
};
