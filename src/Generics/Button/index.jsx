import React from "react";
import { Container } from "./style";
export const Button = ({ width, mr, ml, mt, mb, onClick, type, children }) => {
  return (
    <Container width={width}  mr={mr} ml={ml} mt={mt} mb={mb} onClick={onClick} type={type}>
      {children}
    </Container>
  );
};
