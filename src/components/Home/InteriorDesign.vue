<template>
  <v-sheet class="d-flex align-center">
    <v-card variant="text" align="center">
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
      <v-card-action>
        <v-btn
          class="rounded-xl me-5 me-md-8 my-16"
          elevation="0"
          :size="display.mdAndUp ? 'x-large' : 'default'"
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
          :size="display.mdAndUp ? 'x-large' : 'default'"
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
import { useDisplay } from "vuetify/lib/framework.mjs";
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
      display: useDisplay(),
    };
  },
};
</script>

<style scoped></style>
