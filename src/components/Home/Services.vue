<template>
  <v-sheet height="50vh ">
    <v-row class="ma-0">
      <v-col cols="12" md="4" sm="2" v-for="item in serveses">
        <v-card variant="text">
          <v-img cover :height="300" :src="item.img" alt=""></v-img>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle class="text-wrap">
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
          img: "2.jpg",
          title: "Multi Brands Office Building Dubai",
          des: "This was a very challenging and interesting project for our Design Team. The client, a young man with a strong character, decided to build",
        },
      ],
    };
  },
};
</script>
