import styled from "styled-components";
import MyCheckBox from "../myCheckbox";

const ContainerCheck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

type ShowInputCheckProps = {
  name: string;
};

export const ShowInputCheck = ({ name }: ShowInputCheckProps) => (
  <ContainerCheck>
    <MyCheckBox label={"Accept conditions"} name={name} type={"checkbox"} />
  </ContainerCheck>
);
