<template>
  <div>
    <Carousel />
    <div>
      <h1 class="mt-5">Product merchants</h1>
      <div>
        <v-row>
          <v-col v-for="(product, index) in products" :key="index">
            <ProductCard :product="product" :data-index="index" />
          </v-col>
        </v-row>
        <p>
          <button @click="prevPage">Previous</button>
          <button @click="nextPage">Next</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "~/components/Carousel";
import ProductCard from "~/components/ProductCard.vue";
import { mapState } from "vuex";

export default {
  name: "index",
  components: {
    Carousel,
    ProductCard
  },
  data() {
    return {
      pageSize: 3,
      currentPage: 1
    };
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("fetchProducts");
    } catch (error) {
      error({
        statusCode: 503,
        message: "Unable to fetch products at this time. Please try again"
      });
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage * this.pageSize < products.length)
        this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    }
  },
  computed: mapState({
    products: state => state.products
  })
};
</script>

<style scoped></style>
