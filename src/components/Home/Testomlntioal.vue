<template>
  <v-sheet align="center " class="py-16">
    <h3
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="text-h4 text-md-h3 font-weight-bold my-16"
    >
      OUR TESTOMINTIOAL
    </h3>
    <v-sheet
      class="d-flex justify-center"
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      data-aos-easing="ease-out-cubic"
    >
      <v-carousel
        style="max-width: 1000px"
        hide-delimiter-background
        :height="300"
        :ripple="false"
        :touch="true"
      >
        <template v-slot:prev="{ props }">
          <v-btn
            variant="text"
            color="black"
            :ripple="false"
            @click="props.onClick"
            style="position: absolute; left: -5px"
            elevation="0"
            ><v-icon size="x-large">mdi-chevron-left</v-icon></v-btn
          >
        </template>
        <template v-slot:next="{ props }">
          <v-btn
            variant="text"
            color="black"
            :ripple="false"
            @click="props.onClick"
            elevation="0"
            style="position: absolute; right: -5px"
            ><v-icon size="x-large">mdi-chevron-right</v-icon></v-btn
          >
        </template>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet height="100%" class="text-center d-flex justify-center">
            <div
              class="d-flex flex-column fill-height justify-center align-center text-body-1 w-75"
            >
              <div>
                <p class="mb-1 text-graylight">{{ slide.title }}</p>
                <h5 class="text-graylight font-weight-bold text-body-1 mt-2">
                  {{ slide.des }}
                </h5>
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  name: "Testomlntioal",

  data() {
    return {
      slides: [
        {
          title:
            "Archiade Interior Design's work is simply outstanding. They've turned my space into a true masterpiece, combining aesthetics with functionality flawlessly. I'm beyond impressed with their attention to detail and creative expertise. Highly recommended!",
          des: "Layla",
        },
        {
          title:
            "I'm so impressed with the Archiade showroom! Their furniture selection is fantastic. Every piece has this unique charm that adds elegance and warmth to any room. I'm really amazed by the quality and design they offer. ",
          des: "Emma",
        },
        {
          title:
            "Archiade Interior Design is truly exceptional. Their ability to transform spaces into captivating works of art is unparalleled. From concept to execution, their attention to detail and innovative approach shine through.",
          des: "Amina",
        },
      ],
    };
  },
};
</script>
