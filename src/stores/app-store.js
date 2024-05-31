import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    isMenuOpen: false,
    isScrolled: false,
  }),
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    setScrolled(value) {
      this.isScrolled = value;
    },
  },
});
