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

export default {
  name: "index",
  components: {
    Carousel,
    ProductCard
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
