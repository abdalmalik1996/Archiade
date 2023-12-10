<template>
  <v-sheet>
    <v-card
      class="d-flex align-center justify-center"
      image="/03.png"
      :height="300"
    >
      <v-card-title><h3 class="text-h3 text-white">About US</h3></v-card-title>
    </v-card>
    <v-container class="my-15">
      <v-row class="justify-space-between">
        <v-col cols="12" md="6">
          <v-card-item>
            <v-card-title>
              <h3 class="text-h4 line-hight-1">
                CRAFTING COMFORT <br />
                WITH STYLE
              </h3>
            </v-card-title>
            <v-card-subtitle>
              <p class="text-wrap text-body-1 mt-5">
                Founded in 1988 by Emilio Dini Ciacci and his Italian partners
                in Milan, ARCHIADE embodies the essence of Italian style,
                drawing inspiration from the city's art, design, and fashion.
                With nearly three decades of experience in
                Residential/Commercial Design and Furnishing across Europe and
                the Middle East, we specialize in tailored solutions, spanning
                furniture, lighting, finishes, and finer details. Our approach
                begins with client input, fueling our creativity to bring their
                visions to life. Meticulous detailing defines our work, whether
                it's a simple vase or a unique design element. Natural
                materials—wood, marble, glass, iron, fabric—are artfully
                combined to suit our clients' needs.
              </p>
            </v-card-subtitle>
          </v-card-item>
        </v-col>
        <v-col cols="12" md="5" class="mt-10">
          <v-expansion-panels>
            <v-expansion-panel
              class="bg-black mb-1"
              v-for="(item, i) in items"
              :key="i"
              :title="item.title"
              :text="item.text"
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>

      <v-row class="mt-15 justify-space-between">
        <v-col cols="12" md="6">
          <v-card-item>
            <v-card-title>
              <h3 class="text-h4 text-wrap line-hight-1">
                EXPERIENCE, COMMUNICATION,<br />
                TEAMWORK…<br />
                THIS IS ARCHIADE.
              </h3>
            </v-card-title>
            <v-card-subtitle class="text-wrap mt-15">
              <p class="text-body-1">
                By assimilating the inherent qualities of these materials, we
                masterfully juxtapose them to curate interiors that harmonize
                with the bespoke exigencies of our clientele. The synergy
                between individual brilliance and collaborative cohesion
                empowers us to efficiently navigate large-scale
              </p>
            </v-card-subtitle>

            <v-card-subtitle class="mt-15 text-wrap">
              <p class="text-body-1">
                undertakings, while concurrently providing our clientele an
                encompassing "Turn Key" service. In this endeavor, the synergy
                of our three established offices in Milan, Jeddah, and Dubai
                crystallizes. This not only leverages the collective
                proficiencies of our accomplished team but also ensures an
                on-ground presence throughout all phases of our clients'
                projects.
              </p>
            </v-card-subtitle>
          </v-card-item>
        </v-col>
        <v-col cols="12" md="5" class="d-flex justify-center">
          <v-img src="/about.png"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "OUR VISION",
          text: "Our vision is built on the idea that every space can tell a story, evoke emotions, and reflect a unique identity. We're committed to sleek, modern designs that capture the spirit of Italian style, sophistication, and attention to detail in every project. Our creations aim to inspire and impress, while embracing a fresh and simple aesthetic.",
        },
        {
          title: "OUR MISSION",
          text: "Our mission at ARCHIADE is to transform spaces into captivating experiences that resonate with individuals on a deeply personal level. Through a steadfast commitment to innovative, modern design, we strive to create environments that seamlessly merge functionality with elegance.",
        },
      ],
    };
  },
};
</script>

<style>
.line-hight-1 {
  line-height: 3rem;
}
</style>
