<template>
  <div>
    <Carousel />
    <div>
      <h1 class="mt-5">Product merchants</h1>
      <v-select
        v-model="sortSelected"
        :items="items"
        label="Sort field"
        solo
      ></v-select>
      <div>
        <v-row>
          <v-col v-for="(product, index) in products" :key="index">
            <ProductCard :product="product" :data-index="index" />
          </v-col>
        </v-row>
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
      items: ["desc", "asc"],
      sortSelected: ""
    };
  },
  async fetch({ store, error, route }) {
    try {
      if (route.query.desc) {
        await store.dispatch("fetchProductDesc");
        return;
      } else if (route.query.asc) {
        await store.dispatch("fetchProductAsc");
        return;
      } else {
        await store.dispatch("fetchProducts");
        return;
      }
    } catch (error) {
      console.log("error", error);
      // error({
      //   statusCode: 503,
      //   message: "Unable to fetch products at this time. Please try again"
      // });
    }
  },
  watch: {
    sortSelected(value) {
      this.$router.push({ path: "/", query: { sort: value } });
    },
    "$route.query"() {
      this.$fetch();
    }
  },
  methods: {},
  computed: mapState({
    products: state => state.products
  })
};
</script>

<style scoped></style>
