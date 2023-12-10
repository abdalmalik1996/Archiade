/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          background: "#E7D9CD",
          surface: "#E7D9CD",
          primary: "#1867C0",
          secondary: "#5CBBF6",
          lightBage: "#EADFD5",
          graylight: "#7a7a7a",
        },
      },
    },
  },
});
