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
        <div class="my-4 subtitle-1">$ {{ totalPrice }}</div>

        <div>
          <h4 class="desc">Description</h4>
          {{ product.description }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="amber" text @click="payWithPaystack">
          Buy Now
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  head() {
    return {
      script: [
        {
          src: "https://js.paystack.co/v1/inline.js"
        }
      ]
    };
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    payWithPaystack() {
      var handler = PaystackPop.setup({
        key: "pk_test_5ddb8c83f9bad84d2c7b4c8c166ed8b8c9d830c5",
        email: "you@mail.com",
        // amount: 100000,
        amount: this.totalPrice,
        currency: "NGN",
        ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        metadata: {
          custom_fields: [
            {
              display_name: "Mobile Number",
              variable_name: "mobile_number",
              value: "+2348012345678"
            }
          ]
        },
        callback: function(response) {
          alert("success. transaction ref is " + response.reference);
        },
        onClose: function() {
          alert("window closed");
        }
      });
      handler.openIframe();
    }
  },
  computed: {
    product() {
      return this.$store.getters.productDetail(parseInt(this.$route.params.id));
    },
    totalPrice() {
      console.log("dada", this.$store.getters.getPrice);
      return this.$store.getters.getPrice(parseInt(this.$route.params.id));
    }
  }
};
</script>
