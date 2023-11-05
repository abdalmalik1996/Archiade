<template>
  <v-sheet height="50vh">
    <v-card variant="text">
      <v-tabs v-model="tabProjects">
        <v-tab value="All">ALL</v-tab>
        <v-tab value="Residential">RESIDENTIAL</v-tab>
        <v-tab value="Commercial">COMMERCIAL</v-tab>
      </v-tabs>
      <v-window v-model="tabProjects">
        <v-window-item value="All">
          <v-row class="ma-0">
            <v-col cols="12" md="4" v-for="item in all">
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
        </v-window-item>
        <v-window-item value="Residential">
          <v-row class="ma-0">
            <v-col cols="12" md="4" v-for="item in residential">
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
        </v-window-item>
        <v-window-item value="Commercial">
          <v-row class="ma-0">
            <v-col cols="12" md="4" v-for="item in Commercial">
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
        </v-window-item>
      </v-window>
    </v-card>

  </v-sheet>
</template>
<script>
export default {
  name: "Projects",
  data() {
    return {
      tabProjects: null,

      all: [
        {
          img: "Coffe-Shop-Teheran-scaled.jpg",
          title: "Coffee Shop Teheran",
          des: "An open Coffee Shop located in the most recent developed Mall in Teheran. We took care about the lay out the finishing selection and",
        },
        {
          img: "Ren_0000-EDIT.jpg",
          title: "City Walk",
          des: "This project was a good exercise for our design team to propose a Beauty Salon located at Dubai Marina i. We study the space",
        },
        {
          img: "VIEW-D1.jpg",
          title: "Beauty Salon Dubai",
          des: "This project was a good exercise for our design team to propose a Beauty Salon located at Dubai Marina i. We study the space",
        },
      ],
      residential: [
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
      Commercial: [
        {
          title: "Rotana Head Office Kingdom Tower Riyadh",
          des: "This prestigious project was designed by Michel Bequin a France interior designer. Rotana is a media company in the Middle East similar to Virgin",
          img: "VIEW-D1.jpg",
        },
        {
          title: "Beauty Salon Dubai",
          des: "This project was a good exercise for our design team to propose a Beauty Salon located at Dubai Marina i. We study the space",
          img: "01-2-scaled.jpg",
        },
        {
          title: "Rotana Head Office Kingdom Tower Riyadh",
          des: "This prestigious project was designed by Michel Bequin a France interior designer. Rotana is a media company in the Middle East similar to Virgin",
          img: "01-1.jpg",
        },
      ],
    };
  },
};
</script>
