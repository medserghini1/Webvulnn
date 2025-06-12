import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Adapter au backend réel
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
