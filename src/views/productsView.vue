<template>
  <v-sheet>
    <v-container>
      <v-sheet height="150" variant="text" class="d-flex align-center">
        <v-breadcrumbs
          class="text-body-2 text-md-body-1"
          :items="items"
          divider=">"
        ></v-breadcrumbs>
      </v-sheet>
      <v-layout>
        <v-main>
          <v-sheet>
            <v-card variant="text" class="px-3">
              <v-img :height="550" :src="preview.url" :alt="preview.name">
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                      color="grey-lighten-4"
                      indeterminate
                    ></v-progress-circular>
                  </div> </template
              ></v-img>
              <div class="d-flex justify-end mt-5">
                <v-btn @click="drawer = !drawer" color="black">Details</v-btn>
              </div>
            </v-card>
          </v-sheet>
        </v-main>
        <v-navigation-drawer
          v-model="drawer"
          location="right"
          floating
          rail
          rail-width="400"
        >
          <v-card variant="text">
            <v-card-item class="py-0 pb-2" v-for="details in preview.items">
              <v-card-title class="py-0 pb-1 text-h5">{{
                details.title
              }}</v-card-title>
              <v-card-text
                class="py-0 px-0 text-body-1"
                style="white-space: pre-line"
                >{{ details.des }}</v-card-text
              >
              <!--  -->
              <v-card-text class="py-1 px-0" v-if="details.Legs_aluminum"
                >Legs in casted aluminum.
              </v-card-text>
              <!-- dimensions : -->
              <v-card-item class="px-0" v-if="details.dimensions">
                <v-card-text class="py-0 px-0 text-body-1 font-weight-bold"
                  >Dimensions:</v-card-text
                >
                <v-card-text
                  class="py-0 px-0 text-body-1"
                  v-for="dimension in details.dimensions"
                >
                  {{ dimension }}</v-card-text
                >
              </v-card-item>
              <!-- Dimensions with -->
              <v-card-item
                class="py-1 px-0 text-body-1"
                v-if="details.dimensions_with"
              >
                <v-card-item
                  class="py-2 px-0 text-body-1"
                  v-for="(dimension_with, index) in details.dimensions_with"
                  :key="index"
                >
                  <v-card-text class="py-0 px-0 text-body-1"
                    >Dimensions with :
                  </v-card-text>
                  <v-card-text
                    class="py-0 px-0 text-body-1"
                    v-for="item in dimension_with"
                  >
                    {{ item }}
                  </v-card-text>
                </v-card-item>
              </v-card-item>
              <!-- angular_shape  -->
              <v-card-text
                class="py-0 px-0 text-body-1"
                v-if="details.angular_shape"
              >
                Also available in angular shape with composition upon space
                avaibility.
              </v-card-text>
            </v-card-item>
            <v-card-item class="py-0">
              <DialogRequest />
            </v-card-item>
          </v-card>
        </v-navigation-drawer>
      </v-layout>
      <v-sheet>
        <v-row class="ma-0 pa-0">
          <v-col cols="12" sm="6" md="4" v-for="item in data">
            <v-card variant="text" :height="250" @click="previewHandler(item)">
              <v-img :height="250" :src="item.url" :alt="item.name">
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                      color="grey-lighten-4"
                      indeterminate
                    ></v-progress-circular>
                  </div>
                </template>
              </v-img>
              <!-- <img :src="item.url" class="img" alt="" /> -->
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </v-sheet>
</template>

<script>
import axios from "axios";
import { useDisplay } from "vuetify/lib/framework.mjs";
import DialogRequest from "@/components/DialogRequest.vue";
export default {
  name: "productsView",
  data() {
    return {
      originalData: null,
      data: null,
      display: useDisplay(),
      drawer: false,
      items: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "Furniture Showroom",
          to: "/",
        },
        {
          title: this.$route.params.name,
          disabled: true,
        },
      ],
      preview: "",
      dataFilter: this.data,
    };
  },
  created() {
    axios
      .get(
        `https://ani.point-dev.net/api/product?category_id=${localStorage.getItem(
          "id"
        )}`
      )
      .then((res) => {
        this.originalData = res.data.data;
        this.data = this.originalData;
        this.preview = this.data[0];
        const dataArray = Object.values(this.originalData);
        this.data = dataArray.filter((i) => i.id !== this.preview.id);
      })
      .catch((error) => {});
  },
  components: {
    DialogRequest,
  },
  methods: {
    previewHandler(item) {
      this.preview = item;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      const dataArray = Object.values(this.originalData);
      this.data = dataArray.filter((i) => i.id !== item.id);
    },
  },
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
}
</style>
