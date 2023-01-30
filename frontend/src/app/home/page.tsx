"use client";

import React from 'react';
import styled from 'styled-components'
import { useUser } from '../global/store/user';

type PageProps = {}

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Page = ({}: PageProps) =>{
    const {user} = useUser()
    return(
        <StyledCard>
          <h1>React TS FC Component</h1>
          <div>{user.email}</div>
        </StyledCard>
      );
}

export default Page