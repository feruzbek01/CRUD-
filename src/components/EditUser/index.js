import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../Context";
import { Button } from "../../Generics/Button";
import { Input } from "../../Generics/Input";
import { Container } from "./style";

export const EditUser = () => {
  const { onEdit } = useContext(GlobalContext)
  const {id} = useParams()
  const navigate = useNavigate();
  const [edited, setEdited] = useState(null)


  // useEffect(() => {

  //   const User = users.find((user) => user.id == id);
  //   setSelected(User.name);
  // }, [users, id]);

  const Submit = () => {
    onEdit(edited, id)
    navigate('/')
  }

  const onChange = (e) => {
    setEdited(e.target.value);
  }
  return (
    <div className="center">
      <Container>
        <div className="subTitle">Name</div>
        <Input onChange={onChange} placeholder={"Edit User"} />
        <div>
          <Button mt={"10px"} onClick={Submit}>
            Edit Name
          </Button>
          <Button ml={'5px'} mt={"10px"} onClick={() => navigate("/")} type={"secondary"}>
            Cancel
          </Button>
        </div>
      </Container>
    </div>
  );
};
