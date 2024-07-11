/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import useCrud from "../../useCrud/useCrud";
import { REQUEST_METHOD, USER_LOGIN, API_URL } from "../../ApiData/constant"; // Adjust path as per your folder structure

export default function LoginModal() {
  const [name, setName] = useState({ userName: "", userPass: "" });

  const [userLogindata, userPass, userError, APIHandler] = useCrud({
    type: REQUEST_METHOD.post,
    id: USER_LOGIN,
    url: API_URL.login,
  });

  const handleChange = (event) => {
    const { name: inputName, value } = event.target;
    setName({ ...name, [inputName]: value });
  };

  const handleClick = () => {
    if (!name.userName || !name.userPass) {
      alert("All fields are mandatory");
      APIHandler({
        data: { userName: name.userName, userPass: name.userPass },
      });
      console.log(">>>>>>>>>>>>>>>>apihndle", APIHandler);
    }
  };

  return (
    <div>
      <TextField
        name="userName"
        label="Name"
        fullWidth
        margin="normal"
        value={name.userName}
        onChange={handleChange}
      />
      <TextField
        name="userPass"
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={name.userPass}
        onChange={handleChange}
      />

      <Button variant="contained" onClick={handleClick}>
        Login
      </Button>
    </div>
  );
}
