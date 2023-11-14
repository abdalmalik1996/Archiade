/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";
import AOS from "aos";
import "aos/dist/aos.css";

export function registerPlugins(app) {
  app.use(vuetify).use(router).use(pinia).use(AOS.init());
}
