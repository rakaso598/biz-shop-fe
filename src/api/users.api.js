import { client } from "./index.api";

const sighUp = async (data) => {
  try {
    const response = client.post("/users/sign-up", data);
    const result = response.data;

    return result;
  } catch (e) {
    console.error(e);
  }
};

const logIn = async (data) => {
  try {
    const response = client.post("/users/sign-up", data);
    const result = response.data;

    client.defaults.headers.Authorization = `Basic ${result}`;

    return result;
  } catch (e) {
    console.error(e);
  }
};

const usersAPI = {
  sighUp,
  logIn,
};

export default usersAPI;
