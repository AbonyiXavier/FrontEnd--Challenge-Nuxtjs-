<template>
  <div>
    <Carousel />
    <div>
      <h1 class="mt-5">Product merchants</h1>
      <div class="mb-5">
        <input
          type="text"
          v-model="search"
          placeholder="Search product.."
          @keyup="getProductSearch"
        />
      </div>
      <v-select
        v-model="sortSelected"
        :items="items"
        label="Sort product by Descending and Ascending"
        solo
      ></v-select>
      <div>
        <v-row>
          <v-col v-for="(product, index) in allProducts" :key="index">
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
import { mapState, mapGetters } from "vuex";

export default {
  name: "index",
  components: {
    Carousel,
    ProductCard
  },
  data() {
    return {
      items: ["desc", "asc"],
      sortSelected: "",
      search: ""
      // allProducts: []
    };
  },
  async fetch() {
    try {
      if (this.$route.query.sort == "desc") {
        await this.$store.dispatch("fetchProductDesc");
        return;
      } else if (this.$route.query.sort == "asc") {
        await this.$store.dispatch("fetchProductAsc");
        return;
      } else {
        await this.$store.dispatch("fetchProducts");
        return;
      }
    } catch (error) {
      console.log("error", error);
    }
  },
  fetchOnServer: false,
  watch: {
    sortSelected(value) {
      this.$router.push({ path: "/", query: { sort: value } });
    },
    "$route.query"() {
      this.$fetch();
    }
  },
  created() {},
  methods: {
    getProductSearch() {
      this.allProducts = this.$store.getters.searchResult(this.search);
      // console.log(dada);
    }
  },
  computed: {
    ...mapGetters(["allProducts"]),
    get: function() {
      return this.allProducts;
    },
    set: function(newValue) {
      console.log(newValue);
      var parts = newValue;
      this.allProducts = parts;
    }
  }
  // computed: mapState({
  //   products: state => state.products
  // })
};
</script>

<style scoped></style>
