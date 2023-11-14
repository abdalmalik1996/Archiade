<template>
  <v-dialog
    v-model="dialogHandler"
    fullscreen
    :scrim="false"
    transition="dialog-top-transition"
  >
    <v-toolbar color="black pa-5">
      <v-img :height="80" src="/logo-light.png"></v-img>
      <v-btn
        style="position: absolute; right: 20px"
        icon="mdi-menu"
        @click="dialogHandler = false"
      ></v-btn>
    </v-toolbar>

    <v-card class="bg-black d-flex justify-center">
      <v-list lines="three" class="bg-black" align="center" variant="text">
        <v-list-item
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          v-for="(link, i) in links"
          :key="i"
        >
          <v-list-item-title
            ><v-btn
              variant="plain"
              :to="'/' + link.path"
              :ripple="false"
              @click="dialog = false"
              >{{ link.name }}</v-btn
            ></v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-btn block>SEND REQUEST</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn icon="mdi-facebook" class="bg-transparent"></v-btn>
          <v-btn icon="mdi-twitter" class="bg-transparent"></v-btn>
          <v-btn icon="mdi-youtube" class="bg-transparent"></v-btn>
          <v-btn icon="mdi-instagram" class="bg-transparent"></v-btn>
        </v-list-item>
        <v-list-item>
          <v-list-item-title> info@archiadeatelieh.com</v-list-item-title>
          <v-list-item-title class="mt-3"
            ><v-icon class="me-2">mdi-phone</v-icon> +1 (234) 567
            890</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapWritableState } from "pinia";
import useAppStore from "../../store/app.js";
import { useDisplay } from "vuetify/lib/framework.mjs";
export default {
  data() {
    return {
      notifications: false,
      sound: true,
      widgets: false,
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
    dialogHandler: {
      get() {
        if (this.display.mdAndUp) {
          return false;
        } else {
          return this.dialog;
        }
      },
      set(value) {
        this.dialog = value;
      },
    },
  },
};
</script>
