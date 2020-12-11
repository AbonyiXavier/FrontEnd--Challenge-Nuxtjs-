<template>
  <div>
    <!-- <h1>product #{{ id }}</h1> -->
    <h1>{{ product }}</h1>
    <div v-for="(product, index) in productDetail" :key="index">
      <h1>{{ product.description }}</h1>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  // async fetch() {
  //   try {
  //     await this.$store.dispatch("fetchProduct", this.$route.params.id);
  //   } catch (error) {
  //     error({
  //       statusCode: 503,
  //       message: "Unable to fetch product #" + this.$route.params.id
  //     });
  //   }
  // },

  // computed: {
  //   id() {
  //     return this.$route.params.id;
  //   }
  // },
  computed: {
    // ...mapGetters(["productDetail"])
    product() {
      this.$store.getters.productDetail(this.$route.params.id);
    }
  }
  //   computed: mapState({
  //     product: state => state.products.product
  //   })
};
</script>
