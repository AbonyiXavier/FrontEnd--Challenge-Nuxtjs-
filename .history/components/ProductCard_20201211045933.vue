<template>
  <div>
    <v-row>
      <v-col>
        <nuxt-link :to="'/product/' + product.id">
          <v-card class="mx-auto my-12" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="product.image"></v-img>

            <v-card-title>{{ product.title.substr(0, 10) }} ...</v-card-title>

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

              <!-- <div>
                <h4 class="desc">Description</h4>
                {{ product.description }}
              </div> -->
            </v-card-text>

            <!-- <v-divider class="mx-4"></v-divider> -->
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
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

<style scoped>
.desc {
  font-weight: bold;
  font-size: 14px;
}
</style>
