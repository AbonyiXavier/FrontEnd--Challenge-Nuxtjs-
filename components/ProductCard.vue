<template>
  <div>
    <v-row>
      <v-col>
        <nuxt-link :to="'/product/' + product._id">
          <div>
            <v-card class="mx-auto my-12" max-width="375">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="560"
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
              <!-- <v-card-title>{{ product.title.substr(0, 14) }} ...</v-card-title> -->

              <v-card-text>
                <div class="my-2 subtitle-1">
                  <span>
                    Price:
                  </span>
                  <span class="ml-2"> # {{ product.price }} </span>
                </div>
              </v-card-text>
              <template>
                <v-row justify="center">
                  <template>
                    <nuxt-link :to="'/product/' + product._id">
                      <v-btn color="primary" dark outlined plain>
                        Purchase
                      </v-btn>
                    </nuxt-link>
                  </template>
                </v-row>
              </template>
              <!-- <v-card-actions>
                <template>
                  <v-row justify="center">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                          Purchase
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
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                          >
                            Close
                          </v-btn>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                          >
                            <v-btn color="amber" text @click="payWithPaystack">
                              pay
                            </v-btn>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
                </template>
              </v-card-actions> -->
              <!-- <v-divider class="mx-4"></v-divider> -->
            </v-card>
          </div>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  // head() {
  //   return {
  //     script: [
  //       {
  //         src: "https://js.paystack.co/v1/inline.js"
  //       }
  //     ]
  //   };
  // },
  // data: () => ({
  //   dialog: false,
  //   full_name: null,
  //   email: null,
  //   phone: null
  // }),
  props: {
    product: Object
  }
  // methods: {
  //   payWithPaystack() {
  //     var handler = PaystackPop.setup({
  //       key: "pk_live_06f80e830d0f61b21d5aa787367a99784d05cf3e", // live key
  //       email: this.email,
  //       phone: this.phone,
  //       full_name: this.full_name,
  //       amount: this.product.price * 100,
  //       currency: "NGN",
  //       ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
  //       metadata: {
  //         custom_fields: [
  //           {
  //             display_name: this.full_name
  //           }
  //         ]
  //       },
  //       callback: function(response) {
  //         alert(
  //           "Thank you for making a purchase. transaction ref is " +
  //             response.reference
  //         );
  //         // alert("Thank you for making a purchase");
  //       },
  //       onClose: function() {
  //         // alert("window closed");
  //       }
  //     });
  //     handler.openIframe();
  //   }
  // }
};
</script>

<style scoped>
.desc {
  font-weight: bold;
  font-size: 14px;
}
</style>
