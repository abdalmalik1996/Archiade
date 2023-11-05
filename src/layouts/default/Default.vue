<template>
  <v-app>
    <default-bar />

    <default-view />
    <DefaultFooter/>
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import DefaultFooter from '../AppFooter.vue';
</script>
