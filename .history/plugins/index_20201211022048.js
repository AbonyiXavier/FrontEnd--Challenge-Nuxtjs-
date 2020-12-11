import Vue from "vue";
import Carousel3d from "vue-carousel-3d";
if (process.client) {
  Vue.use(Carousel3d);
}
