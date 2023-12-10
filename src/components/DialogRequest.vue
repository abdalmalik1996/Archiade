<template>
  <v-dialog v-model="dialog" persistent width="600">
    <template v-slot:activator="{ props }">
      <v-btn class="mt-1" color="black" v-bind="props"> SEND REQUEST </v-btn>
    </template>

    <v-card>
      <v-card-item class="pa-1">
        <template v-slot:append>
          <v-btn
            icon="mdi-close"
            size="small"
            variant="text"
            @click="dialog = false"
          ></v-btn> </template
      ></v-card-item>
      <v-card-title class="text-center">
        <h3 class="text-h4 font-weight-medium">SEND REQUEST</h3>
      </v-card-title>
      <v-card-text class="pb-5">
        <v-form>
          <v-text-field label="Name" variant="outlined" />
          <v-text-field label="Email" variant="outlined" />
          <v-textarea rows="3" label="Message" variant="outlined"></v-textarea>
          <v-btn block color="black">Send</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogRequest",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped></style>
