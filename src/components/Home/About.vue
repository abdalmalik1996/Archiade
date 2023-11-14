<template>
  <v-sheet style="height: 100vh" class="d-flex align-center">
    <v-row>
      <v-col cols="12" md="6" class="d-flex justify-center align-center">
        <v-card variant="text" data-aos="fade-up" data-aos-duration="2000">
          <v-card-title class="text-wrap pa-0"
            ><h3 class="text-h3 line-hight-1">
              CRAFTING COMFORT <br />
              WITH STYLE
            </h3></v-card-title
          >

          <v-card-subtitle class="text-wrap pa-0 my-8">
            <p class="text-body-1">
              Founded in 1988 by Emilio Dini Ciacci and his Italian partners in
              Milan, ARCHIADE embodies the essence of Italian style, drawing
              inspiration from the city's art, design, and fashion. With nearly
              three decades of experience in Residential/Commercial Design and
              Furnishing across Europe and the Middle East, we specialize in
              tailored solutions, spanning furniture, lighting, finishes, and
              finer details
            </p>
          </v-card-subtitle>
          <v-btn class="bg-black rounded-xl">READ MORE</v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img height="500" src="/about.png"></v-img>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  name: "About",
};
</script>
<style>
.line-hight-1 {
  line-height: 4rem;
}
</style>
