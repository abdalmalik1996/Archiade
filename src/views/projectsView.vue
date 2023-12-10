<template>
  <v-sheet>
    <v-container>
      <v-sheet height="150" variant="text" class="d-flex align-center">
        <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
      </v-sheet>
      <v-sheet>
        <swiper-container navigation="true" thumbs-swiper=".my-thumbs">
          <swiper-slide lazy="true" v-for="image in images">
            <v-img :height="666" cover :src="image"></v-img>
          </swiper-slide>
        </swiper-container>

        <swiper-container
          class="my-thumbs mt-10"
          slides-per-view="5"
          mousewheel-force-to-axis="true"
          scrollbar="true"
          :spaceBetween="20"
        >
          <swiper-slide
            style="cursor: pointer"
            lazy="true"
            v-for="image in images"
          >
            <v-img cover :height="200" :src="image" />
          </swiper-slide>
        </swiper-container>
      </v-sheet>
    </v-container>
  </v-sheet>
</template>

<script>
import { register } from "swiper/element/bundle";
import "swiper/element/css/thumbs";
register();
export default {
  name: "projectsView",
  created() {
    try {
      const storedJsonString = localStorage.getItem("IntDeVieHan");
      this.item = JSON.parse(storedJsonString);

      if (
        !this.item ||
        !this.item.images ||
        !this.item.images[0] ||
        !this.item.images[0].arr
      ) {
        throw new Error("Invalid data structure in localStorage.");
      }

      this.images = this.item.images[0].arr;
    } catch (error) {
      console.error("Error while retrieving or parsing data:", error);
    }
    register();
  },
  data() {
    return {
      items: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "Interior Design",
          to: "/interior-design",
        },
        {
          title: this.$route.params.name,
          disabled: true,
        },
      ],
      images: null,
      item: null,
    };
  },
  computed: {
    currentImages() {
      return this.item?.images?.[0]?.arr || [];
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
