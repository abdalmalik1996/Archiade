<template>
  <v-sheet align="center" class="py-16">
    <h3
      align="left"
      data-aos="fade-right"
      data-aos-duration="2000"
      class="text-h5 text-md-h3 font-weight-bold my-16"
    >
      OUR SHOWROOM
    </h3>

    <v-row class="ma-0">
      <v-col cols="12" md="4" v-for="item in images">
        <v-card
          variant="text"
          class="pa-1"
          :to="{ name: 'Projects', params: { name: item.title } }"
        >
          <v-img
            class="elevation-5"
            cover
            :height="300"
            :src="item.img"
            alt=""
          ></v-img>
          <v-card-title class="animate__animated animate__fadeInUp">
            {{ item.title }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="bg-black rounded-xl my-8" prepend-icon="mdi-eye"
      >SHOW MORE</v-btn
    >
  </v-sheet>
</template>
<script>
import { useDisplay } from "vuetify/lib/framework.mjs";


export default {
  data: () => ({
    images: [
      {
        title: "Living Room",
        img: "4Garden-scaled.jpg",
      },
      {
        title: "Dining Room",
        img: "4Garden-scaled.jpg",
      },
      {
        title: "Bed Room",
        img: "4Garden-scaled.jpg",
      },
    ],
    display: useDisplay(),
  }),
};
</script>
<style></style>
