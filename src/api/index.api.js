import usersAPI from "./users.api";
import axios from "axios";

const baseURL = "http://localhost:5555";
export const client = axios.create({ baseURL });

const api = {
  users: usersAPI,
};

export default api;
