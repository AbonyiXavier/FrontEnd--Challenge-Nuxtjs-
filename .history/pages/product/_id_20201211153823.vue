<template>
  <div>
    <v-card class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="product.image"></v-img>

      <v-card-title>{{ product.title }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4">
            4.5 (413)
          </div>
        </v-row>

        <div class="my-4 subtitle-1">$ {{ product.price }}</div>

        <div>
          <h4 class="desc">Description</h4>
          {{ product.description }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="amber" text @click="buyNow">
          Buy Now
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  methods: {
    buyNow() {
      alert(this.$route.params.id);
    }
  },
  computed: {
    product() {
      return this.$store.getters.productDetail(parseInt(this.$route.params.id));
    }
  }
};
</script>
