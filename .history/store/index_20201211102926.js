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

  SORT_JOBS(state, sortKey) {
    console.log("running mutation");
    const jobs = this.state.jobs;
    jobs.sort((a, b) => {
      let compare = 0;
      if (a[sortKey] > b[sortKey]) {
        compare = 1;
      } else if (b[sortKey] > a[sortKey]) {
        compare = -1;
      }
      return compare;
    });
    state.jobs = jobs;
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
  }
};
