<template>
  <q-page class="row col-12">
    <div class="profile-container">
      <div class="profile__container__section basic-information">
        <CustomCardProfile>
          <BasicInformation
            @open-form="openFormDataBasic"
            :editForm="true"
          ></BasicInformation>
        </CustomCardProfile>
      </div>
      <div class="profile__container__section aditional-iformation">
        <CustomCardProfile :directionColumn="true">
          <AditionalInformation></AditionalInformation>
        </CustomCardProfile>
      </div>
      <div class="profile__container__section vehicle-information">
        <CustomCardProfile :editForm="true">
          <VehicleInformation @open-form="openFormVehicle"></VehicleInformation>
        </CustomCardProfile>
      </div>
      <div class="profile__container__section information-income">
        <CustomCardProfile :directionColumn="true">
          <InformationIncome></InformationIncome>
        </CustomCardProfile>
      </div>
    </div>
    <FormBasicInformation v-model="showFormDataBasic"></FormBasicInformation>
    <FormVehicleInformation
      v-model="showFormVehicleInformation"
    ></FormVehicleInformation>
  </q-page>
</template>

<script setup>
import BasicInformation from "@/components/myProfile/BasicInformation.vue";
import AditionalInformation from "@/components/myProfile/AditionalInformation.vue";
import VehicleInformation from "@/components/myProfile/VehicleInformation.vue";
import InformationIncome from "@/components/myProfile/InformationIncome.vue";
import CustomCardProfile from "../components/myProfile/utils/CustomCardProfile.vue";
import FormBasicInformation from "../components/myProfile/utils/FormBasicInformation.vue";
import FormVehicleInformation from "../components/myProfile/utils/FormVehicleInformation.vue";
import { ref } from "vue";

const showFormDataBasic = ref(false);
const showFormVehicleInformation = ref(false);

const openFormDataBasic = () => {
  showFormDataBasic.value = true;
};

const openFormVehicle = () => {
  showFormVehicleInformation.value = true;
};
</script>

<style scoped>
.profile-container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: calc((100% - 20px) * 0.5) calc((100% - 20px) * 0.5);
  grid-template-rows: auto auto;
  grid-template-areas:
    "basicInformation aditionalInformation"
    "vehicleInformation informationIncome";
  gap: 10px;
  padding: 30px;
}

.profile__container__section {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.basic-information {
  grid-area: basicInformation;
}

.aditional-iformation {
  grid-area: aditionalInformation;
}

.vehicle-information {
  grid-area: vehicleInformation;
}

.information-income {
  grid-area: informationIncome;
}

@media (max-width: 899px) {
  .profile-container {
    grid-template-columns: 50%;
    grid-template-areas:
      "basicInformation"
      "aditionalInformation"
      "vehicleInformation"
      "informationIncome";
  }
}

@media (max-width: 900px) {
  .profile-container {
    grid-template-columns: 49%;
    grid-template-areas:
      "basicInformation aditionalInformation"
      "vehicleInformation informationIncome";
  }
}

/*
@media (min-width: 601px) and (max-width: 899px) {
  .profile-container {
    grid-template-columns: 100%;
    grid-template-areas:
      "basicInformation"
      "aditionalInformation"
      "vehicleInformation"
      "informationIncome";
  }
} */
</style>
