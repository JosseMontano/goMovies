import { ErrorMessage, useField } from "formik";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  span{
    margin-left: 5px;
  }
`;

type Props = {
  label: string;
  name: string;
  type: string;
};

function MyCheckBox({ label, ...props }: Props) {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <Container>
        <input className="full" {...field} {...props} />
        <span>{label}</span>
      </Container>

      <ErrorMessage name={props.name} component="p" className="error" />
    </>
  );
}

export default MyCheckBox;
