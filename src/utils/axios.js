import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  //   baseURL: "http://192.168.113:8000/api",
});
