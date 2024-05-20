import { defineStore } from "pinia";

export const useClientServiceStore = defineStore("clienteDetail", {
  state: () => ({
    client: {
      name: "",
      placeOrigin: "",
      placeDestination: "",
      price: "",
      detailsArticles: [],
    },
  }),
  getters: {
    clientNow(state) {
      return state.client;
    },
  },
  actions: {
    addClient(client) {
      console.log(client);
      this.client = client;
    },
  },
});
