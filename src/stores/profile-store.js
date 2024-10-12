import { defineStore } from "pinia";

export const useProfileStore = defineStore("clienteDetail", {
  state: () => ({
    profile: {
      name: "Darinel",
      paternalSurnmame: "Cigarroa",
      maternalSurname: "de los Santos",
      address: "Las flores calle orquidea MZ9 LT8",
      phoneNumber: "96125983",
    },
  }),
  getters: {
    ProfileNow(state) {
      return state.profile;
    },
  },
  actions: {
    updateProfile(profile) {
      console.log("profile store");
      this.profile = profile;
    },
  },
});
