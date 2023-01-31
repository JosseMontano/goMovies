"use client"

import { useField } from "formik";
import styled from "styled-components";

const Container = styled.div<{ error: any }>`
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
    color: ${(p) => p.error && "red"};
  }
`;

type Props = {
  label: string;
  name: string;
  type: string;
};

function MyCheckBox({ label, ...props }: Props) {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  let error = meta.touched ? meta.error && true : false;
  return (
    <>
      <Container title={meta.error} error={error}>
        <input {...field} {...props} />
        <span>{label}</span>
      </Container>
    </>
  );
}

export default MyCheckBox;
