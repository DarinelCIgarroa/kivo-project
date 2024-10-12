import { defineStore } from "pinia";

export const useNavbarStore = defineStore("clienteDetail", {
  state: () => ({
    activeFormLogin: false,
    drawerLeft: false,
  }),
  getters: {},
  actions: {
    toggleLoginForm() {
      this.activeFormLogin = !this.activeFormLogin;
    },
    toggleDrawerLeft() {
      console.log(" toggleDrawerLeft");
      this.drawerLeft = !this.drawerLeft;
    },
  },
});
