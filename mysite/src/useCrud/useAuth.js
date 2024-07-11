/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Import the setUser action creator
// eslint-disable-next-line import/no-unresolved
import { ALL_USERS_LIST, API_URL, REQUEST_METHOD } from "../ApiData/constant";
import useCrud from "./useCrud";

const useAuthUser = () => {
  const [userInfoData, userInfoLoading, userInfoError, userInfoAPIHandler] =
    useCrud({
      type: REQUEST_METHOD.post,
      id: ALL_USERS_LIST,
      url: API_URL.user,
    });

  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>apiurl", API_URL.user);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const getUserfromToKen = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigation("/login");
    }
    userInfoAPIHandler({ data: { token } });
  };

  useEffect(() => {
    if (userInfoData) {
      getUserfromToKen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfoData]);

  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>userInfoData", userInfoData);
  // eslint-disable-next-line no-undef
  return [userInfoData, getUserfromToKen];
};

export default useAuthUser;
