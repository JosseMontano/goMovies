import styled from "styled-components";
import {
  BtnSocialMedia,
  Icon,
  Title,
  ShowInputText,
  ShowInputCheck,
} from "@/global/components/loginRegister/";
import { Formik, Form, useField } from "formik";
import validationSchema, { initialValues } from "./validations/signIn";
import { customForm } from "./data/customForm";
import { LoginType } from "./interfaces/login";
import CustomFormType from "../Register/interfaces/form";
import { Btn } from "@/global/components/btn";
import { colorPrimary } from "@/global/styles/colors";

type IndexProps = {};

interface mapType {
  [key: string]: JSX.Element;
}

const Container = styled.div`
  display: grid;
  height: 100vh;
  place-content: center;
`;

export const Index = ({}: IndexProps) => {
  function showFom(v: CustomFormType) {
    return <ShowInputText key={v.name} v={v} />;
  }

  return (
    <Container>
      <Icon />
      <Title msg={"Login to Your Account"} />

      <Formik
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        <Form noValidate>
          {customForm.map((v) => showFom(v))}
          <Btn colorPrimary={colorPrimary} msg="Sign in" />
        </Form>
      </Formik>

      <BtnSocialMedia />
    </Container>
  );
};
