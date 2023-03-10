import styled from "styled-components";
import { useUser } from "../../global/store/user";

type IndexProps = {};

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Index = ({}: IndexProps) => {
  const { user, logOut } = useUser();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <StyledCard>
      <h1>{JSON.stringify(user)}</h1>
      <button onClick={() => handleLogOut()}>logout</button>
    </StyledCard>
  );
};
