<template>
  <div>
    <Carousel />
    <div>
      <h1>Product merchants</h1>
      <div>
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :product="product"
          :data-index="index"
        />
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
    return {};
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
  computed: mapState({
    products: state => state.products.products
  })
};
</script>

<style scoped></style>
