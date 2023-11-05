<template>
  <v-sheet align="center" class="py-16">
    <h3 class="text-h2 my-16 font-weight-bold">OUR SHOWROOM</h3>
    <vueper-slides
      class="no-shadow"
      autoplay
      :visible-slides="4"
      slide-multiple
      :gap="3"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
      <vueper-slide v-for="image in images" :key="i" :image="image" />
    </vueper-slides>

    <v-btn class="bg-black rounded-xl my-5" prepend-icon="mdi-eye"
      >SHOW MORE</v-btn
    >
  </v-sheet>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  data: () => ({
    images: [
      "/Living.png",
      "/Dining.png",
      "/NightAreaBed.png",
      "/NightAreaWardrobes.png",
      "/Living.png",
      "/Dining.png",
      "/NightAreaBed.png",
      "/NightAreaWardrobes.png",
      "/Living.png",
      "/Dining.png",
      "/NightAreaBed.png",
      "/NightAreaWardrobes.png",
    ],
  }),

  components: {
    VueperSlides,
    VueperSlide,
  },
};
</script>
<style></style>
