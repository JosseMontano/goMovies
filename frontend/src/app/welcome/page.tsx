"use client";

import React from 'react';
import styled from 'styled-components'

type PageProps = {}

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Page = ({}: PageProps) => (
  <StyledCard>
    <h1>React TS FC Component</h1>
    <div>List</div>
  </StyledCard>
);

export default Page