<template>
  <v-app>
    <Defaultnav />
    <default-bar />
    <default-view />
    <DefaultFooter />
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
import DefaultFooter from "./AppFooter.vue";
import Defaultnav from "./AppNav.vue";
</script>
