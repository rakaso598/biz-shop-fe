import { client } from "./index.api";

const getAllProducts = async () => {
  const response = await client.get("/products");
  const result = response.data;

  return result;
};

const productsAPI = { getAllProducts };

export default productsAPI;
