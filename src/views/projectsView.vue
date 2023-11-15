<template>
  <v-sheet>
    <v-container>
      <v-sheet height="150" variant="text" class="d-flex align-center">
        <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
      </v-sheet>
      <v-row>
        <v-col cols="12" md="6">
          <v-img src="/Coffe-Shop-Teheran-scaled.jpg"></v-img>
          <v-row class="ma-0 mt-5" style="gap: 5px">
            <v-img src="/Coffe-Shop-Teheran-scaled.jpg"></v-img>
            <v-img src="/Coffe-Shop-Teheran-scaled.jpg"></v-img>
            <v-img src="/Coffe-Shop-Teheran-scaled.jpg"></v-img>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-card variant="text">
            <v-card-item>
              <v-card-title class="mb-3"
                ><h3 class="text-h4 font-weight-bold">
                  {{ $route.params.name }}
                </h3></v-card-title
              >
              <v-card-subtitle class="text-wrap">
                <p class="text-body-1">
                  This project is the first branch opened from Banca Intesa in
                  the Middle East last 2008 at Dubai Financial Centre (DIFC).
                  The lay out and furniture selection was done in collaboration
                  with their Milano Head office to maintain the same spirit and
                  standards of the existing ones around the world. We took care
                  of the entire fit out works, including finishing material,
                  glass partition , the supply and installation of the furniture
                  .
                </p>
              </v-card-subtitle>
            </v-card-item>
            <v-card-item>
              <v-form>
                <div class="text-h5 font-weight-bold">
                  Tell Us More About Project
                </div>
                <v-text-field variant="underlined" label="Name" />
                <v-text-field variant="underlined" label="Email" />
                <v-textarea
                  variant="underlined"
                  rows="3"
                  label="message"
                ></v-textarea>
                <v-btn color="black">Send</v-btn>
              </v-form>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "ProjectsView",
  data() {
    return {
      items: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "Interior Design ",
          to: "/interior-design",
        },
        {
          title: this.$route.params.name,
          disabled: true,
        },
      ],
    };
  },
};
</script>
