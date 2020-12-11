<template>
  <div>
    <div>
      home
      <!-- <carousel-3d>
        <slide :index="0">
          Slide 1 Content
        </slide>
        <slide :index="1">
          Slide 2 Content
        </slide>
      </carousel-3d> -->

      <carousel-3d>
        <slide v-for="(event, i) in events" :index="i" :key="i">
          <figure>
            <img v-bind:src="event.images" />
          </figure>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  name: "index",
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
