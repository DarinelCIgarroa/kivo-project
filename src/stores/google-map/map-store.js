
import { defineStore } from "pinia";

export const useMapStore = defineStore("mapStore", {
  state: () => ({
    isMapVisible: false, // Estado para controlar la visibilidad del mapa
  }),
  actions: {
    showMap() {
      this.isMapVisible = true;
    },
    hideMap() {
      this.isMapVisible = false;
    },
  },
});
