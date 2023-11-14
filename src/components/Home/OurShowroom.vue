<template>
  <v-sheet class="py-16">
    <h3
      data-aos="fade-right"
      data-aos-duration="2000"
      class="text-h3 font-weight-bold my-16"
    >
      OUR SHOWROOM
    </h3>
    <vueper-slides
      class="no-shadow"
      autoplay
      :visible-slides="4"
      slide-multiple
      :gap="3"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
      <vueper-slide v-for="(image, i) in images" :key="i" :image="image" loading />
    </vueper-slides>

    <v-btn class="bg-black rounded-xl my-5" prepend-icon="mdi-eye"
      >SHOW MORE</v-btn
    >
  </v-sheet>
</template>
<script>
import { storage } from "@/plugins/firbase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  data: () => ({
    // images: [
    //   "/Living.png",
    //   "/Dining.png",
    //   "/NightAreaBed.png",
    //   "/NightAreaWardrobes.png",
    //   "/Living.png",
    //   "/Dining.png",
    //   "/NightAreaBed.png",
    //   "/NightAreaWardrobes.png",
    //   "/Living.png",
    //   "/Dining.png",
    //   "/NightAreaBed.png",
    //   "/NightAreaWardrobes.png",
    // ],
    images: [],
    storageRef: ref(
      storage,
      "gs://archiade-58dbc.appspot.com/storage/HomePage/OurShowroom"
    ),
  }),

  components: {
    VueperSlides,
    VueperSlide,
  },
  mounted() {
    listAll(this.storageRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            this.images.push(url);
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style></style>
