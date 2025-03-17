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

const usersAPI = {
  sighUp,
};

export default usersAPI;
