// Utilities
import { defineStore } from "pinia";

const useAppStore = defineStore("app", {
  state: () => ({
    dialog: false,
  }),
});

export default useAppStore;
