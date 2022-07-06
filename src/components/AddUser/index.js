import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context";
import { Button } from "../../Generics/Button";
import { Input } from "../../Generics/Input";
import { Container } from "./style";


export const AddUser = () => {
  const navigate = useNavigate();
  const {onAdd} = useContext(GlobalContext)
  const [name , setName] = useState(null)
  
  const Submit = () => {
    onAdd(name)
    navigate('/')
  }

  return (
    <div className="center">
      <Container>
        <div className="subTitle">Name</div>
        <Input onChange={(e)=> setName(e.target.value)} placeholder={"Add User"} />
        <div>
          <Button onClick={Submit} mt={"10px"}>Submit</Button>
          <Button ml={"5px"} onClick={() => navigate("/")} type={"secondary"}>
            Cancel
          </Button>
        </div>
      </Container>
    </div>
  );
};
