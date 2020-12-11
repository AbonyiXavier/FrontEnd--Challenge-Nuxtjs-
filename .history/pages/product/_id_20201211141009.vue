<template>
  <div>
    <h1>product #{{ id }}</h1>
    <h1>{{ description }}</h1>
    <!-- <div v-for="(product, index) in productDetail" :key="index">
    </div> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch("fetchProduct", params.id);
    } catch (error) {
      error({
        statusCode: 503,
        message: "Unable to fetch product #" + params.id
      });
    }
  },

  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  computed: {
    ...mapGetters(["productDetail"])
  }
  //   computed: mapState({
  //     product: state => state.products.product
  //   })
};
</script>
