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
      this.drawerLeft = !this.drawerLeft;
    },
  },
});

export const useDrawerStore = defineStore('drawer', {
  state: () => ({
    isMiniDrawer: false,
  }),
  actions: {
    miniDrawer() {
      this.isMiniDrawer = true;
    },
    drawerClick() {
      this.isMiniDrawer = false;
    },
  },
});