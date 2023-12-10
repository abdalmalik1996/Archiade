<template>
  <v-sheet>
    <v-card variant="text">
      <v-tabs v-model="tabProjects">
        <v-tab v-for="tab in tabs" :key="tab.value" :value="tab.value">{{
          tab.label
        }}</v-tab>
      </v-tabs>
      <v-window v-model="tabProjects">
        <v-window-item v-for="tab in tabs" :key="tab.value" :value="tab.value">
          <v-row class="ma-0">
            <v-col cols="12" sm="4" v-for="item in getFilteredItems(tab.value)">
              <v-card
                variant="text"
                class="pa-1"
                :to="{ name: 'Projects', params: { name: item.title } }"
                @click="IntDeVieHan(item)"
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
        </v-window-item>
      </v-window>
    </v-card>
  </v-sheet>
</template>

<script>
import residentialData from "@/plugins/data/residential.json";
import commercialData from "@/plugins/data/commercial.json";

export default {
  name: "Projects",
  data() {
    return {
      tabProjects: null,
      tabs: [
        { label: "RESIDENTIAL", value: "Residential" },
        { label: "COMMERCIAL", value: "Commercial" },
      ],
      residential: residentialData,
      commercial: commercialData,
    };
  },
  methods: {
    getFilteredItems(tabValue) {
      const data =
        tabValue === "Residential" ? this.residential : this.commercial;
      if (this.$route.name === "Home") {
        return data.slice(0, 3);
      } else {
        return data;
      }
    },
    IntDeVieHan(item) {
      const jsonString = JSON.stringify(item);
      localStorage.setItem("IntDeVieHan", jsonString);
    },
  },
};
</script>
