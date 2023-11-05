<template>
  <v-sheet class="pb-16">
    <v-carousel
      :height="550"
      :cycle="true"
      :show-arrows="false"
      hide-delimiters
    >
      <v-carousel-item
        v-for="image in images"
        :src="image"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-sheet>
</template>
<script>
export default {
  name: "Introduction",
  data() {
    return {
      images: ["/01.png", "/02.png", "/03.png", "/04.png", "/05.png"],
    };
  },
};
</script>
