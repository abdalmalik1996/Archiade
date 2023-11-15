<template>
  <v-sheet>
    <v-container>
      <v-sheet height="150" variant="text" class="d-flex align-center">
        <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
      </v-sheet>
      <v-layout>
        <v-main>
          <v-sheet>
            <v-card variant="text" class="px-3">
              <v-img cover :height="500" src="/public/04.png"></v-img>
              <div class="d-flex justify-end mt-5">
                <v-btn @click="drawer = !drawer" color="black">Details</v-btn>
              </div>
            </v-card>
            <v-row class="ma-0 pa-0">
              <v-col cols="12" md="4" v-for="n in 10">
                <v-card>
                  <v-img src="/public/02.png" alt="" />
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-main>
        <v-navigation-drawer v-model="drawer" location="right" floating>
          <v-card variant="text" class="pt-5">
            <v-card-item>
              <v-card-title class="py-5">
                <h3 class="text-h5 font-weight-bold">
                  {{ $route.params.name }}
                </h3>
              </v-card-title>
              <v-card-subtitle class="text-wrap">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati, quia! Eos praesentium ipsa quis, ad adipisci
                  maiores quos optio? Sint ratione totam odio neque repellendus
                  similique omnis quae aliquam mollitia.
                </p>
              </v-card-subtitle>
              <v-btn class="mt-5" color="black">SEND REQUEST</v-btn>
            </v-card-item>
          </v-card>
        </v-navigation-drawer>
      </v-layout>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "productsView",
  data() {
    return {
      drawer: null,
      items: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "Furniture Showroom",
          to: "/Showroom",
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

<style></style>
