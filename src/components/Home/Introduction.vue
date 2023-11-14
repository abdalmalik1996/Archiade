<template>
  <v-sheet class="pb-16">
    <v-carousel
      :height="550"
      :cycle="true"
      :show-arrows="false"
      hide-delimiters
    >
      <v-carousel-item
        transition="fade"
        :src="image"
        cover
        v-for="image in images"
      >
      </v-carousel-item>
    </v-carousel>
  </v-sheet>
</template>
<script>
import "animate.css";
export default {
  name: "Introduction",
  data() {
    return {
      images: ["/01.png", "/02.png", "/03.png", "/04.png", "/05.png"],
    };
  },
};
</script>

<style>
.fade-enter-active {
  animation: zoomIn;
  animation-duration: 4s;
}
.fade-leave-active {
  animation: fadeOut;
  animation-duration: 1s;
}
</style>
