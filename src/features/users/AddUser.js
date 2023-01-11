import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import TextBox from "../../components/TextBox";

function AddUser() {
  const navigate=useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const handleAddUser=()=>{
    setValues({name:"",email:""});
    console.log(values);
    navigate('/');
  }
  return (
    <div className="container flex-row justify-center p-5 mx-11 items-center">
      <TextBox
        value={values.name}
        label="Name"
        onChange={(e)=>setValues({...values,name:e.target.value})}
        inputProps={{ type: "text", placeholder: "John Doe" }}
      />
      <TextBox
        value={values.email}
        label="Email"
        onChange={(e)=>setValues({...values,email:e.target.value})}
        inputProps={{ type: "email", placeholder: "email" }}
      />
      <Button onClick={handleAddUser}>Add user</Button>
    </div>
  );
}

export default AddUser;
