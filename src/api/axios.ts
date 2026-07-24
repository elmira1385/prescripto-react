
import axios from "axios";

export const api = axios.create({
  baseURL: "https://prescripto-server.greatstack.in",
  headers: {
    "Content-Type": "application/json",
  },
});

