import ProductService from "@/services/ProductService.js";

export const state = () => ({
  products: [],
  product: {},
  sortKey: []
});

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  },
  SET_PRODUCT_DESC(state, products) {
    state.products = products;
  },
  SET_PRODUCT_ASC(state, products) {
    state.products = products;
  }
};

export const actions = {
  fetchProducts({ commit }) {
    return ProductService.getProducts().then(response => {
      console.log("data", response.data);
      commit("SET_PRODUCTS", response.data);
    });
  },
  fetchProduct({ commit }, id) {
    return ProductService.getProduct(id).then(response => {
      console.log("data 2", response);
      commit("SET_PRODUCT", response.data);
    });
  },
  fetchProductDesc({ commit }) {
    return ProductService.sortProductDesc().then(response => {
      console.log("data 3", response);
      commit("SET_PRODUCT_DESC", response.data);
    });
  },
  fetchProductAsc({ commit }) {
    return ProductService.sortProductAsc().then(response => {
      console.log("data 3", response);
      commit("SET_PRODUCT_ASC", response.data);
    });
  }
};

export const getters = {
  allProducts: state => {
    return state.products;
  },
  searchResult: state => value => {
    console.log(value);
    return state.products.filter(product => {
      return product.title === value;
    });
  }
};
