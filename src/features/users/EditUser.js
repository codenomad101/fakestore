import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextBox from "../../components/TextBox";
import { editUser } from "./UserSlice";
const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const users = useSelector((store) => store.users);
  const existinguser = users.filter((user) => user.id === params.id);
  const { name, email } = existinguser[0];
  const [values, setValues] = useState({
    name,
    email,
  });
  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };
  return (
    <div className="container flex-row justify-center p-5 mx-11 items-center">
      <TextBox
        value={values.name}
        label="Name"
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "John Doe" }}
      />
      <TextBox
        value={values.email}
        label="Email"
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "email" }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
