import axios from "axios";

const dotaApi = axios.create({
  baseURL: "https://api.opendota.com/api/heroStats",
});

const storeApi = axios.create({
  baseURL: "https://dummyjson.com/products",
});

const mongoAPI = axios.create({
  baseURL: "https://apimongodb.barzdev.repl.co",
});

export { dotaApi, storeApi, mongoAPI };
