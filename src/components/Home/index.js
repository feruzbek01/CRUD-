import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import { Heading } from "../Heading";
import { UseList } from "../UserList";
import { Container } from "./style";
export const Home = () => {
  const { users, onDelete } = useContext(GlobalContext)
  return (
    <div className="center">
      <Container>
        <Heading />
        { users.length ? users.map(value => {
          return <UseList key={value.id} onDelete={onDelete} value={value} />
        }) : <h3 className="center title" >No Data Found</h3>}
      </Container>
    </div> 
  );
};
