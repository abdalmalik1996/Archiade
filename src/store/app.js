// Utilities
import { defineStore } from "pinia";
import axios from "axios";
const useAppStore = defineStore("app", {
  state: () => ({
    dialog: false,
    product: "",
    categorys: null,
  }),
  actions: {
    getCategorys() {
      axios
        .get("https://ani.point-dev.net/api/category", {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            parent_name: "showroom",
          },
        })
        .then((res) => {
          this.$state.categorys = res.data.data;
        })
        .catch((error) => {});
    },
  },
});

export default useAppStore;
