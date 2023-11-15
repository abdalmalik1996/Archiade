<template>
  <v-sheet>
    <v-card
      class="d-flex align-center justify-center"
      image="/03.png"
      :height="300"
    >
      <v-card-title
        ><h3 class="text-h3 text-white">Interior Design</h3></v-card-title
      >
    </v-card>
    <v-container>
      <InteriorDesign />
    </v-container>
  </v-sheet>
</template>

<script>
import InteriorDesign from "@/components/Home/InteriorDesign.vue";
export default {
  components: {
    InteriorDesign,
  },
};
</script>

<style></style>
