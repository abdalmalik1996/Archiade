<template>
  <v-sheet class="d-flex align-center">
    <v-card variant="text" align="center" width="100%">
      <v-card-item>
        <v-card-title align="left">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            class="text-h4 text-md-h3 font-weight-bold pt-16"
            v-if="$route.name !== 'interior-design'"
          >
            INTERIOR DESIGN
          </h1>
        </v-card-title>
      </v-card-item>
      <Projects />
      <v-btn class="bg-black rounded-xl my-5" prepend-icon="mdi-eye"
        >SHOW MORE</v-btn
      >
    </v-card>
  </v-sheet>
</template>

<script>
import { VCardActions } from "vuetify/lib/components/index.mjs";
import Projects from "./Projects.vue";

import { useDisplay } from "vuetify/lib/framework.mjs";
export default {
  name: "InteriorDesign",
  components: {
    Projects,
    VCardActions,
  },
  data() {
    return {
      display: useDisplay(),
    };
  },
};
</script>

<style scoped></style>
