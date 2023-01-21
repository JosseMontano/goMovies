import styled from "styled-components";
import CustomFormType from "../../interfaces/form";
import MyTextInput from "@/global/components/myTextInput";
import { ErrorMessage } from "formik";

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

type ShowInputTextProps = {
  v: CustomFormType;
};

export const ShowInputText = ({ v }: ShowInputTextProps) => (
  <>
    <InputContainer key={v.name}>
      <div>{v.icon}</div>
      <MyTextInput name={v.name} placeholder={v.placeholder!} type={v.type} />
      {v.extra}
    </InputContainer>
    <ErrorMessage name={v.name} component="p" className="error" />
  </>
);
