import axios from "axios";

const instance = axios.create({
  baseURL: "BACKEND_URL",
});

export default instance;
