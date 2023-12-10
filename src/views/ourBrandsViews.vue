<template>
  <v-sheet>
    <v-card
      class="d-flex align-center justify-center"
      image="/03.png"
      :height="300"
    >
      <v-card-title
        ><h3 class="text-h3 text-white">Our Brands</h3></v-card-title
      >
    </v-card>
    <v-container>
      <v-row>
        <v-col
          v-for="(brand, i) in brands"
          :key="i"
          class="d-flex child-flex"
          cols="12"
          md="3"
          sm="6"
        >
          <v-img :src="brand" :height="300" cover class="bg-grey-lighten-2">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      brands: [],
    };
  },
  async mounted() {
    await this.loadImages();
  },
  methods: {
    // ../../assets/COMMERCIAL/**/*.jpg
    // ../assets/Ourbands/**/*.png
    async loadImages() {
      const imagesContext = import.meta.glob("../assets/Ourbands/**/*.png");
      this.brands = await Promise.all(
        Object.values(imagesContext).map(async (importer) => {
          const module = await importer();
          return module.default;
        })
      );
    },
  },
};
</script>

<style scoped></style>
