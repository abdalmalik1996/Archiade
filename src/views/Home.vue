<template>
  <v-container >
    <Introduction />
    <InteriorDesign />
    <OurShowroom />
    <Testomlntioal />
    <About/>
  </v-container>
</template>

<script>
import Introduction from "@/components/Home/Introduction.vue";
import InteriorDesign from "@/components/Home/InteriorDesign.vue";
import OurShowroom from "@/components/Home/OurShowroom.vue";
import Testomlntioal from "@/components/Home/Testomlntioal.vue";
import About from "@/components/Home/About.vue";
export default {
  components: {
    Introduction,
    InteriorDesign,
    OurShowroom,
    Testomlntioal,
    About,
  },
};
</script>

<style>
.v-container{
  max-width: 1400px  !important;
}
</style>
