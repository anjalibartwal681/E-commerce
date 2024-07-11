/* eslint-disable no-unused-vars */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";
import useAuthUser from "../useCrud/useAuth";
import useCrud from "../useCrud/useCrud";
import { ALL_USERS_LIST, API_URL, REQUEST_METHOD } from "../ApiData/constant";

// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line import/no-unresolved

const geteditFields = (old, newObj) => {
  const insertObj = {};

  Object.keys(old).forEach((key) => {
    if (old[key] !== newObj[key]) {
      insertObj[key] = newObj[key];
    }
  });
  return insertObj;
};

export default function EditProfilePage() {
  const navigation = useNavigate();
  const [user, refreshUser] = useAuthUser();
  console.log("userAuth", user);

  const [editUserprofile, setUserEditProfile] = useState();
  useEffect(() => {
    setUserEditProfile(user);
  }, [user]);
  const [usereditData, usereditLoading, usereditError, usereditAPIHandler] =
    useCrud({
      type: REQUEST_METHOD.get,
      id: ALL_USERS_LIST,
      url: API_URL.updateUser,
    });

  const handleSubmit = async () => {
    if (editUserprofile) {
      // eslint-disable-next-line no-undef
      const oldFields = geteditFields(user, editUserprofile);

      // const response = await axios.post(
      //   `updateUser/${editUserprofile._id}`,
      //   oldFields
      // );
      refreshUser();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserEditProfile({ ...editUserprofile, [name]: value });
  };

  return (
    <div>
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2" />

        <TextField
          name="username"
          label="Name"
          value={editUserprofile?.username}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          value={editUserprofile?.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="contact"
          label="Contact"
          value={editUserprofile?.contact}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        {/* <TextField
            name="password"
            label="Password"
            value={editedUserData?.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          /> */}
      </Box>
      <Button variant="contained" onClick={handleSubmit}>
        Save
      </Button>
    </div>
  );
}
