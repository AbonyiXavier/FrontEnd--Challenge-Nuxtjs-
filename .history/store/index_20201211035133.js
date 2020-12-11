import ProductService from "@/services/ProductService.js";

export const state = () => ({
  products: [],
  product: {}
});

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  }
};

export const actions = {
  fetchProducts({ commit }) {
    return ProductService.getProducts().then(response => {
      console.log("data", response);
      commit("SET_PRODUCTS", response.data);
    });
  },
  fetchProduct({ commit }, id) {
    return ProductService.getProduct(id).then(response => {
      console.log("data 2", response);
      commit("SET_PRODUCT", response.data);
    });
  }
};
