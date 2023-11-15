<template>
  <v-sheet>
    <v-card
      class="d-flex align-center justify-center"
      image="/03.png"
      :height="300"
    >
      <v-card-title
        ><h3 class="text-h3 text-white">SEND REQUEST</h3></v-card-title
      >
    </v-card>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-form class="pa-3" label="Request A Quote By Submitting This Form">
            <div class="text-h5 font-weight-bold py-6">
              Request A Quote By Submitting This Form
            </div>
            <VTextField variant="underlined" label="Name" />
            <VTextField variant="underlined" label="Email" />
            <v-textarea
              variant="underlined"
              rows="3"
              label="message"
            ></v-textarea>
            <v-btn color="black">Send</v-btn>
          </v-form>
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center">
          <v-card variant="text" class="pa-4">
            <v-card-title class="mb-3">
              <h4 class="text-h4 font-weight-bold">Location</h4>
            </v-card-title>
            <v-card-subtitle>
              <p class="text-body-1">
                Dubai Design District <br />
                Building 03 R01 <br />P.0.BOX 11970,DUBAI UAE
              </p>
            </v-card-subtitle>
            <v-card-subtitle class="mt-3">
              <v-icon class="me-2">mdi-email-outline</v-icon>
              <span class="text-body-1">atelier@archiade.com</span>
            </v-card-subtitle>
            <v-card-subtitle class="mt-2">
              <v-icon class="me-2">mdi-phone-outline</v-icon>
              <span class="text-body-1">+971 455 410 04</span>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-sheet>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d463327.5865296505!2d55.224587!3d24.872497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f734706cce76d%3A0xaceeceb414a9896f!2sBuilding%2003!5e0!3m2!1sen!2sus!4v1700060510806!5m2!1sen!2sus"
        width="100%"
        height="450"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  name: "RequestViews",
};
</script>

<style>
iframe {
  filter: brightness(100%) contrast(101%) saturate(0%) blur(0px)
    hue-rotate(0deg);
}
</style>
