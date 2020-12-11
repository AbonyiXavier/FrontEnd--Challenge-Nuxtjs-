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

      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>product title</v-card-title>

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

        <div class="my-4 subtitle-1">
          $ product price
        </div>

        <div>
          product description
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <!-- <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        View details
      </v-btn>
    </v-card-actions> -->
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object
  }
};
</script>

<style lang="scss" scoped></style>
