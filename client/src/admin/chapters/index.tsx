import styled from "styled-components";

type IndexProps = {};

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Index = ({}: IndexProps) => {
  return (
    <StyledCard>
      <h1>React TS FC Component</h1>
      <div>List</div>
    </StyledCard>
  );
};
