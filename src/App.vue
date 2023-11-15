<template>
  <router-view />
  <Whatsapp />
</template>

<script>
import Whatsapp from "./components/Whatsapp.vue";
export default {
  components: {
    Whatsapp,
  },
};
</script>
