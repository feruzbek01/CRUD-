import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Generics/Button";
import {  Wrapper } from "./style";

export const Heading = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Wrapper.Name>My Team</Wrapper.Name>
      <Button onClick={() => navigate("/add")} type={"primary"}>
        Add User
      </Button>
    </Wrapper>
  );
};
