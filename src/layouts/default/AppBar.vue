<template>
  <v-app-bar flat>
    <v-container class="py-0">
      <v-row class="ma-0 align-center">
        <v-col class="pa-0" cols="4" md="2">
          <v-img height="50" width="250" src="/logo.png"></v-img
        ></v-col>

        <v-col class="pa-0" cols="8" v-if="display.mdAndUp"
          ><v-btn-toggle
            variant="plain"
            selected-class="link-active"
            class="w-100 d-flex justify-center"
            style="gap: 5px"
          >
            <v-btn
              class="link font-weight-bold"
              :ripple="false"
              :to="'/' + link.path"
              v-for="(link, i) in links"
              :key="i"
              >{{ link.name }}</v-btn
            >
          </v-btn-toggle></v-col
        >
        <v-col class="pa-0" align="end" cols="2" v-if="display.mdAndUp">
          <v-btn to="/Send-Request" class="bg-black rounded-xl">
            send Request
          </v-btn>
        </v-col>
        <VSpacer />
        <v-col cols="1" v-if="display.smAndDown">
          <v-btn @click="dialog = true" icon="mdi-menu"></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { useDisplay } from "vuetify/lib/framework.mjs";
import { mapWritableState } from "pinia";
import useAppStore from "@/store/app";
export default {
  data() {
    return {
      links: [
        {
          name: "Home",
          path: "",
        },
        {
          name: "Interior Design",
          path: "interior-design",
        },
        {
          name: "Showroom",
          path: "Showroom",
        },
        {
          name: "Our Brands",
          path: "our-brands",
        },
        {
          name: "About US",
          path: "about-us",
        },
      ],
      display: useDisplay(),
    };
  },
  computed: {
    ...mapWritableState(useAppStore, ["dialog"]),
  },
};
</script>
<style scoped>
.link::before {
  content: "";
  position: absolute;
  bottom: 5px;
  width: 100%;
  height: 0.1em;
  background-color: black;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}
.link::before {
  opacity: 1;
  transform: scale(0);
  transform-origin: center;
}
a:hover::before,
a:focus::before {
  transform: scale(1) !important;
}

.link-active.link::before {
  transform: scale(1) !important;
}
.v-btn--variant-plain {
  opacity: 1;
}
@media (min-width: 960px) {
  .v-container {
    max-width: 1200px;
  }
}
</style>
