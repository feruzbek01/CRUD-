import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../Context";
import { Button } from "../../Generics/Button";
import { Input } from "../../Generics/Input";
import { Container } from "./style";

export const EditUser = () => {
  const { onEdit, users } = useContext(GlobalContext);
  const { id } = useParams()

  const navigate = useNavigate();
  const [edited, setEdited] = useState([])

  console.log(users);

  useEffect(() => {
    // eslint-disable-next-line
    const User = users.find((user) => user.id == id);
    setEdited(User);
    console.log(User, "User");
  }, [users, id]);

  const Submit = () => {
    onEdit(edited, id)
    navigate('/')
  }

  const onChange = (e) => {
    setEdited({
      id:id,
      name: e.target.value,
    });
  }
  return (
    <div className="center">
      <Container>
        <div className="subTitle">Name</div>
        <Input
          value={edited?.name}
          onChange={onChange}
          placeholder={"Edit User"}
        />
        <div>
          <Button mt={"10px"} onClick={Submit}>
            Edit Name
          </Button>
          <Button
            ml={"5px"}
            mt={"10px"}
            onClick={() => navigate("/")}
            type={"secondary"}
          >
            Cancel
          </Button>
        </div>
      </Container>
    </div>
  );
};
