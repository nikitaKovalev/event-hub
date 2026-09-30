import axios from "axios";

export const AXIOS_INSTANCE = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json",
  }
});