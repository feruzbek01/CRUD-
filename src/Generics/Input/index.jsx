import React from "react";
import { Container } from "./style";

export const Input = ({ placeholder, pl, onChange, value }) => {
  return <Container value={value} placeholder={placeholder} onChange={onChange} />;
};
