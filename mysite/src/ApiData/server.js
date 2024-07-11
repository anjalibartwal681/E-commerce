import axios from "axios";

export const server = axios.create({
  baseURL: "http://localhost:8080/",
});

// Add a request interceptor
server.interceptors.request.use(
  function (config) {
    // Modify the request config before sending it
    config.headers["ngrok-skip-browser-warning"] = "69420";
    // get token from ls
    // add in config.header
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Handle request errors
    return Promise.reject(error);
  }
);
