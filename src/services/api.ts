import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "x-www-form-url-encoded",
  },
});

export default api;
