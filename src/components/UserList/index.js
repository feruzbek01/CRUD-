import React from "react";
import { Button } from "../../Generics/Button";
import { Wrapper } from "./style";
import { useNavigate} from 'react-router-dom'

export const UseList = ({ value, onDelete }) => {
  const navigate = useNavigate()
return (
  <Wrapper>
    <Wrapper.Name>{value.name}</Wrapper.Name>
    <div>
      <Button
        onClick={() => navigate(`edit/${value.id}`)}
        width={"80px"}
        type={"update"}
      >
        Edit
      </Button>
      <Button
        onClick={() => onDelete(value.id)}
        width={"100px"}
        ml={"6px"}
        type={"secondary"}
      >
        Delete
      </Button>
    </div>
  </Wrapper>
);
};
