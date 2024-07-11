/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { TextField, Button, CircularProgress, Alert } from "@mui/material";
import useCrud from "../../useCrud/useCrud";
import {
  REQUEST_METHOD,
  USER_SIGNUP_DATA,
  API_URL,
} from "../../ApiData/constant"; // Adjust path as per your folder structure

export default function SignupModal() {
  const [name, setName] = useState({
    username: "",
    email: "",
    contact: "", 
    
    password: "",
  });
  
  const [
    userSignupInfo,
    userSignupLoading,
    userSignupError,
    userSignupAPIHandler,
  ] = useCrud({
    type: REQUEST_METHOD.post,
    id: USER_SIGNUP_DATA,
    url: API_URL.signup,
  });

  const handleChange = (event) => {
    const { name: inputName, value } = event.target;
    setName({ ...name, [inputName]: value });
  };

  const handleClick = () => {
    const { username, email, contact, password } = name;
    if (!username || !email || !contact || !password) {
      return alert("All fields are mandatory");
    }
    // Add additional validation as needed
    userSignupAPIHandler({
      data: { username, email, contact, password },
    });
  };

  return (
    <div>
      {userSignupError && (
        <Alert severity="error">{userSignupError.message}</Alert>
      )}
      <TextField
        name="username"
        label="Username"
        fullWidth
        margin="normal"
        value={name.username}
        onChange={handleChange}
      />
      <TextField
        name="email"
        label="Email"
        fullWidth
        margin="normal"
        type="email"
        value={name.email}
        onChange={handleChange}
      />
      <TextField
        name="contact"
        label="Contact"
        fullWidth
        margin="normal"
        value={name.contact}
        onChange={handleChange}
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={name.password}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        onClick={handleClick}
        disabled={userSignupLoading}
      >
        {userSignupLoading ? <CircularProgress size={24} /> : "Signup"}
      </Button>
    </div>
  );
}
