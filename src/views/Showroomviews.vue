<template>
  <v-sheet>
    <v-card
      class="d-flex align-center justify-center"
      image="/03.png"
      :height="300"
    >
      <v-card-title><h3 class="text-h3 text-white">Showroom</h3></v-card-title>
    </v-card>

    <v-container>
      <v-row>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="3">
          <!-- <v-img
            src="/NightAreaWardrobes.png"
            :height="300"
            cover
            class="bg-grey-lighten-2"
          >
          </v-img> -->
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
