import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080", // your Spring Boot port
  withCredentials: true,            // important for session-based auth
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
