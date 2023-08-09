import axios from "axios";

const dotaApi = axios.create({
  baseURL: "https://api.opendota.com/api/heroStats",
});

const storeApi = axios.create({
  baseURL: "https://dummyjson.com/products",
});

export { dotaApi, storeApi };
