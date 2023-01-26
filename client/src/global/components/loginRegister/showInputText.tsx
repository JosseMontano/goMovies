import styled from "styled-components";
import CustomFormType from "../../../public/Register/interfaces/form";
import { useField } from "formik";

const colorError = "#581d26";
const border = `1px solid ${colorError}`;
const colorErrorBack = "rgba(88, 29, 38,.1)";

const InputContainer = styled.div<{ error: any }>`
  display: flex;
  width: 100%;
  margin-top: 10px;
  border: ${(p) => p.error && border};
  border-radius: 7px;
  div {
    padding: 10px;
    background-color: ${(p) => (p.error ? colorErrorBack : "#2e2e2e")};
    color: white;
    min-width: 50px;
    text-align: center;
  }
  input {
    border: none;
    width: 100%;
    padding: 10px;
    outline: none;
    background-color: ${(p) => (p.error ? colorErrorBack : "#2e2e2e")};
  }
`;

type ShowInputTextProps = {
  v: CustomFormType;
};

export const ShowInputText = ({ v }: ShowInputTextProps) => {
  const obj = {
    placeholder: v.placeholder,
    name: v.name,
    type: v.type,
  };

  const [field, meta] = useField(obj);
  let error = meta.touched ? meta.error && true : false;
  return (
    <>
      <InputContainer title={meta.error} key={v.name} error={error}>
        <div>{v.icon}</div>
        <input {...field} {...obj} />
        {v.extra}
      </InputContainer>
    </>
  );
};
