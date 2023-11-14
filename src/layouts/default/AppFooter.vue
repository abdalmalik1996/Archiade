<template>
  <v-footer class="bg-black pa-0 flex-column">
    <v-container class="pb-0">
      <v-row class="ma-0 w-100 py-5">
        <v-col class="pa-0">
          <v-list-item class="mb-5">
            <v-img
              data-aos="fade-up"
              data-aos-duration="3000"
              width="300"
              class="pl-10"
              :height="100"
              src="/logo-light.png"
            ></v-img>
          </v-list-item>
          <v-row>
            <v-col cols="12" sm="6">
              <v-list-item>
                <v-list-item-title class="text-h6 text-uppercase"
                  ><v-btn variant="text">Home</v-btn></v-list-item-title
                >
                <v-list-item-title class="text-h6 text-uppercase"
                  ><v-btn variant="text"
                    >INTERIOR DESIGN</v-btn
                  ></v-list-item-title
                >
                <v-list-item-title class="text-h6 text-uppercase"
                  ><v-btn variant="text">SHOWROOM</v-btn></v-list-item-title
                >

                <v-list-item-title class="text-h6 text-uppercase"
                  ><v-btn variant="text">OUR BRANDS</v-btn></v-list-item-title
                >
                <v-list-item-title class="text-h6 text-uppercase"
                  ><v-btn variant="text">ABOUT US</v-btn></v-list-item-title
                >
                <v-list-item-title class="text-h6 py-9 px-5 text-uppercase"
                  >Use</v-list-item-title
                >
                <v-list-item-title class="py-2 px-5 text-uppercase"
                  >Dubai Design District</v-list-item-title
                >
                <v-list-item-title class="py-2 px-5 text-uppercase"
                  >Building 03 R01</v-list-item-title
                >

                <v-list-item-title class="py-2 px-5 text-uppercase"
                  >P.0.BOX 11970,DUBAI UAE</v-list-item-title
                >
              </v-list-item>
            </v-col>
            <v-col cols="12" sm="6">
              <v-list-item>
                <v-list-item-title class="text-h6 text-uppercase">
                  <v-card-actions>
                    <v-btn icon="mdi-facebook" />
                    <v-btn icon="mdi-twitter" />
                    <v-btn icon="mdi-instagram" />
                    <v-btn icon="mdi-linkedin" />
                  </v-card-actions>
                </v-list-item-title>
                <v-list-item-title class="text-h6 text-uppercase"
                  ><v-btn variant="text"
                    >atelier@archiade.com</v-btn
                  ></v-list-item-title
                >
                <v-list-item-title class="text-h6 text-uppercase"
                  ><v-btn variant="text">
                    +971 455 410 04</v-btn
                  ></v-list-item-title
                >
              </v-list-item>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="5" class="pa-0">
          <v-list-item class="mt-6">
            <v-list-item-title>
              <h4 class="text-h6 text-md-h5 text-lg-h4">
                LET'S TALK ABOUT YOUR FUTURE <br />
                PROJECTS WITH US
              </h4>
            </v-list-item-title>
            <v-btn
              class="d-block mt-8 rounded-xl"
              size="x-large"
              variant="outlined"
              >GET STARTED</v-btn
            >
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
    <v-sheet class="bg-black" width="100%">
      <v-divider class="border-opacity-100" color="white"></v-divider>
      <v-container>
        <div class="d-md-flex w-100 align-center px-8 text-center py-1">
          <p class="text-body-2">
            Copyright © 2023. All Rights Reserved By Archiade Atelier FZ-LLC
          </p>
          <v-spacer></v-spacer>

          <v-btn
            variant="text"
            class="text-capitalize text-body-2 font-weight-light"
            >Privacy Policy</v-btn
          >
          <v-btn
            variant="text"
            class="text-capitalize text-body-2 font-weight-light"
            >Terms & Services</v-btn
          >
        </div>
      </v-container>
    </v-sheet>

    <VSpacer />
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
