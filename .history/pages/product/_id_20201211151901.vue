<template>
  <div>
    <!-- <h1>product #{{ id }}</h1> -->
    <h1>{{ product.description }}</h1>
    <!-- <div v-for="(product, index) in productDetail" :key="index">
      <h1>{{ product.description }}</h1>
    </div> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    // ...mapGetters(["productDetail"])
    product() {
      return this.$store.getters.productDetail(this.$route.params.id);
    }
  }
  //   computed: mapState({
  //     product: state => state.products.product
  //   })
};
</script>
