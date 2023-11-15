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
        <v-col v-for="item in items" :key="item" cols="12" md="3">
          <v-card
            :to="{ name: 'products', params: { name: item } }"
            variant="text"
          >
            <v-img cover src="/Coffe-Shop-Teheran-scaled.jpg"></v-img>
            <v-card-title class="text-wrap" align="center"
              ><h3 class="text-h6 font-weight-bold">
                {{ item }}
              </h3></v-card-title
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "Living Room",
        "Dining Room",
        "NIGHT AREA",
        "LIGHTING",
        "WALL DECORATION",
        "ACCESSORIES & DECORATIVE ELEMENTS",
        "HOME THEATER",
        "OUTDOOR",
      ],
    };
  },
};
</script>

<style scoped></style>
