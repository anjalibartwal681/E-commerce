import React, { useEffect, useState } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import useCrud from "../../useCrud/useCrud";
import {
  REQUEST_METHOD,
  USER_LOGIN_DATA,
  API_URL,
} from "../../ApiData/constant";

export default function LoginModal() {
  const [name, setName] = useState({ email: "", password: "" });

  const [userLogindata, userLoading, userError, APIHandler] = useCrud({
    type: REQUEST_METHOD.post,
    id: USER_LOGIN_DATA,
    url: API_URL.login,
  });
  console.log("userLoading", userLoading);

  const handleChange = (event) => {
    const { name: inputName, value } = event.target;
    setName({ ...name, [inputName]: value });
  };

  const handleClick = () => {
    const { email, password } = name;
    if (!email || !password) {
      return alert("All fields are mandatory");
    }
    APIHandler({ data: { email, password } });
  };

  useEffect(() => {
    console.log(">>>>>>>>>>>>>>>>>>userLogindata?.token", userLogindata);
    if (userLogindata) {
      const {
        tokens: {
          access: { token: accessToken },
          refresh: { token: refreshToken },
        },
      } = userLogindata;

      // Set the token in local storage after successful login
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }
  }, [userLogindata]);

  useEffect(() => {
    if (userError) {
      alert(userError);
    }
  }, [userError]);

  return (
    <div>
      <TextField
        name="email"
        label="Name"
        fullWidth
        margin="normal"
        value={name.email}
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

      <Button variant="contained" onClick={handleClick}>
        {/* {userLoading && userLogindata */}
          {/* ? (<CircularProgress size={24} color="inherit" />) Login */}
          {/* : (<CircularProgress size={24} color="inherit" />)  Logout */}
          login
      </Button>
      
      <Button variant="contained" onClick={handleClick}>
        {/* {userLoading && userLogindata */}
         
          Logout
      </Button>
    </div>
  );
}
