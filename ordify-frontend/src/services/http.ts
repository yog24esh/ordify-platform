import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080", // your Spring Boot port
  withCredentials: true,            // important for session-based auth
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  const sessionId = localStorage.getItem("SESSION_ID");

  if (sessionId) {
    config.headers["X-SESSION-ID"] = sessionId;
  }

  return config;
});

export default http;
