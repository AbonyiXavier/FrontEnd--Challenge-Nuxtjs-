<template>
  <div>
    <Carousel />
    <div>
      <h1 class="mt-5">Product merchants</h1>
      <input
        type="text"
        v-model.trim="search"
        placeholder="Search product.."
        @keyup="getProductSearch"
      />
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
  created() {
    this.getProductSearch();
  },
  methods: {
    getProductSearch() {
      console.log(123);
      if (this.search) {
        this.$store.state.products.filter(
          product => console.log(product.title)
          // product.title.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        console.log("people", this.$store.state.products);
        this.$store.state.products;
      }
    }
  },
  computed: {
    ...mapGetters(["allProducts"])
  }
  // computed: mapState({
  //   products: state => state.products
  // })
};
</script>

<style scoped></style>
