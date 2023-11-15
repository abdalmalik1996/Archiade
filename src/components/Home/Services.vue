<template>
  <v-sheet>
    <v-row class="ma-0">
      <v-col cols="12" md="4" sm="2" v-for="(item, i) in serveses" :key="i">
        <v-card variant="text">
          <v-img
            cover
            :height="300"
            :src="item.img"
            alt=""
            class="elevation-5"
          ></v-img>
          <v-card-title class="animate__animated animate__fadeInUp">
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle
            class="text-wrap animate__animated animate__fadeInUp"
          >
            {{ item.des }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      serveses: [
        {
          img: "4Garden-scaled.jpg",
          title: "Georges",
          des: "This Project is back dated 1995. A young couple ask for a different design villa from the usual Mediterranean style available everywhere. So we",
        },
        {
          img: "VIEW-D1.jpg",
          title: "Asian Florida Style Beach Villa Jeddah",
          des: "This Project is back dated 1995. A young couple ask for a different design villa from the usual Mediterranean style available everywhere. So we",
        },
        {
          img: "VIEW-D1.jpg",
          title: "Multi Brands Office Building Dubai",
          des: "This was a very challenging and interesting project for our Design Team. The client, a young man with a strong character, decided to build",
        },
      ],
    };
  },
};
</script>
