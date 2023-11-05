<template>
  <h1 class="text-h3 font-weight-bold pt-16">INTERIOR DESIGN</h1>
  <v-sheet height="100vh" class="d-flex align-center">
    <v-card variant="text" align="center">
      <v-card-action>
        <v-btn
          class="rounded-xl me-8 my-16"
          elevation="0"
          size="x-large"
          :class="{
            'bg-black': tab === 'Projects',
            'bg-lightBage': tab !== 'Projects',
          }"
          @click="tab = 'Projects'"
          >OUR PROJECTS</v-btn
        >
        <v-btn
          class="rounded-xl"
          elevation="0"
          size="x-large"
          :class="{
            'bg-black': tab === 'Services',
            'bg-lightBage': tab !== 'Services',
          }"
          @click="tab = 'Services'"
          >OUR SERVICES</v-btn
        >
      </v-card-action>
      <keep-alive>
        <component :is="tab"></component>
      </keep-alive>
      <v-btn class="bg-black rounded-xl my-5" prepend-icon="mdi-eye"
        >SHOW MORE</v-btn
      >
    </v-card>
  </v-sheet>
</template>

<script>
import { VCardActions } from "vuetify/lib/components/index.mjs";
import Projects from "./Projects.vue";
import Services from "./Services.vue";
export default {
  name: "InteriorDesign",
  components: {
    Projects,
    Services,
    VCardActions,
  },
  data() {
    return {
      tab: "Projects",
    };
  },
};
</script>

<style scoped></style>
