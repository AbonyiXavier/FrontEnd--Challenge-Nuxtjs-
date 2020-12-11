<template>
  <div>
    home page
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  name: "Home page",
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    var vm = this;
    setTimeout(function() {
      vm.events = [
        {
          images: "http://placehold.jp/150x150.png"
        },
        {
          images: "http://placehold.jp/160x160.png"
        },
        {
          images: "http://placehold.jp/170x170.png"
        }
      ];
    }, 2000);
  }
};
</script>

<style scoped></style>
