<template>
  <div>
    <Carousel />
    <div>
      <h1>Product merchants</h1>
      <div>
        <EventCard
          v-for="(event, index) in events"
          :key="index"
          :event="event"
          :data-index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "~/components/Carousel";
export default {
  name: "index",
  components: {
    Carousel
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
