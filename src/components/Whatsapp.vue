<template>
  <v-btn
    tag="a"
    target="_blank"
    icon="mdi-whatsapp"
    class="whatsapp"
    href="https://wa.me/+971586282795"
  >
  </v-btn>
</template>

<script>
export default {
  name: "Whatsapp",
};
</script>

<style scoped>
.whatsapp {
  position: fixed;
  z-index: 4;
  inset-block-end: 4%;
  inset-inline-end: 50px;
  background-color: #61ce70;
  color: white;
}
</style>
