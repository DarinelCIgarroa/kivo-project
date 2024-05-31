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
    clientNowArticles(state) {
      return state.client.detailsArticles;
    },
  },
  actions: {
    addClient(client) {
      console.log(client);
      this.client = client;
    },
  },
});
