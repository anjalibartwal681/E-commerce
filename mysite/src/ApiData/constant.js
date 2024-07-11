// ---------------------------------------------------------------------------------------------------------------------------------

export const REQUEST_METHOD = {
  get: "read",
  post: "create",
  patch: "update",
};
// ---------------------------------------------------------------------------------------------------------------------------------

export const API_URL = {
  login: "v1/auth/login",
  signup: "v1/auth/register",
  logout: "v1/auth/logout",
  getUser: "v1/auth/verify-token",
  getUsers: "v1/users",
  updateUser: "v1/users",
};
// ---------------------------------------------------------------------------------------------------------------------------------

export const UI_ROUTES = {
  login: "/login",
  signup: "/signup",
};
// ---------------------------------------------------------------------------------------------------------------------------------

export const USER_LOGIN_DATA = "USER_LOGIN_DATA";
export const USER_SIGNUP_DATA = "USER_SIGNUP_DATA";
export const USER_DETAIL = "USER_DETAIL";
export const ALL_USERS_LIST = "ALL_USERS_LIST";
export const USER_LOGOUT_DATA = "USER_LOGOUT_DATA";
// ---------------------------------------------------------------------------------------------------------------------------------
