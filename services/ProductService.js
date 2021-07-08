import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://coulture-backend.herokuapp.com/api`,
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
  },
  sortProductAsc() {
    return apiClient.get("/products?sort=asc");
  }
};
