import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://fakestoreapi.com`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getProducts() {
    return apiClient.get("/products");
  },
  getProduct(id) {
    return apiClient.get("/products/" + id);
  },
  sortProductDesc() {
    return apiClient.get("/products?sort=desc");
  }
};
