<template>
  <v-sheet class="">
    <v-carousel
      :height="display.mdAndUp ? 550 : 400"
      :cycle="true"
      class="elevation-5"
      interval="3000"
    >
      <v-carousel-item :src="image" cover v-for="image in images">
      </v-carousel-item>
    </v-carousel>
  </v-sheet>
</template>
<script>
import { useDisplay } from "vuetify/lib/framework.mjs";
export default {
  name: "Introduction",
  data() {
    return {
      images: ["/01.png", "/02.png", "/03.png", "/04.png", "/05.png"],
      display: useDisplay(),
    };
  },
};
</script>

<style></style>
