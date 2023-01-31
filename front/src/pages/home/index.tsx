import React, { useEffect, useState } from "react";
import { useUser } from "@/store/user";

type PageProps = {};

const Index = ({}: PageProps) => {

  const { user } = useUser();

  
  return (
    <div>
      <h1>React TS FC Component</h1>
      <div>{user.email}</div>
    </div>
  );
};

export default Index;
