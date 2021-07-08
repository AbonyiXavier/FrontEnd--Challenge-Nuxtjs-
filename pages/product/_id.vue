<template>
  <div>
    <form>
      <div>
        <v-card class="mx-auto my-12" max-width="550">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="800"
            :src="`https://coulture-backend.herokuapp.com/${product.photo}`"
          ></v-img>

          <v-card-title>
            <span> Product title: </span>
            <span class="ml-2">
              {{ product.title }}
            </span></v-card-title
          >
          <v-card-title>
            <span>
              Quantity in Stock:
            </span>
            <span class="ml-2">
              {{ product.stockQuantity }}
            </span></v-card-title
          >

          <v-card-text>
            <div class="my-2 subtitle-1">
              <span>
                Price:
              </span>
              <span class="ml-2"> # {{ product.price }} </span>
            </div>

            <div>
              <h4 class="desc">Description</h4>
              {{ product.description }}
            </div>
          </v-card-text>
          <v-card-actions>
            <template>
              <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                      Buy Now
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Buyer Details</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              label="Email*"
                              v-model="email"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Full Name*"
                              v-model="full_name"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Phone Number*"
                              v-model="phone"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog = false">
                        Close
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="dialog = false">
                        <v-btn color="amber" text @click="payWithPaystack">
                          pay
                        </v-btn>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </template>
          </v-card-actions>
          <!-- <v-divider class="mx-4"></v-divider> -->
        </v-card>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "ProductCard",
  head() {
    return {
      script: [
        {
          src: "https://js.paystack.co/v1/inline.js"
        }
      ]
    };
  },
  data: () => ({
    dialog: false,
    full_name: null,
    email: null,
    phone: null
  }),

  computed: {
    product() {
      // console.log("lalala", this.$store.getters.productDetail);
      // console.log(this.$route.params.id);
      return this.$store.getters.productDetail(this.$route.params.id);
      // return this.$store.getters.productDetail(parseInt(this.$route.params.id));
    }
    // totalPrice() {
    //   return this.$store.getters.getPrice(parseInt(this.$route.params.id));
    // }
  },
  methods: {
    payWithPaystack() {
      var handler = PaystackPop.setup({
        key: process.env.key, // live key
        email: this.email,
        phone: this.phone,
        full_name: this.full_name,
        amount: this.product.price * 100,
        currency: "NGN",
        ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        metadata: {
          custom_fields: [
            {
              display_name: this.full_name
            }
          ]
        },
        callback: function(response) {
          alert(
            "Thank you for making a purchase. transaction ref is " +
              response.reference
          );
          // alert("Thank you for making a purchase");
        },
        onClose: function() {
          // alert("window closed");
        }
      });
      handler.openIframe();
    }
  }
};
</script>
