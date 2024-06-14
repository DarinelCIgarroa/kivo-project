<template>
  <q-page class="row col-12">
    <div class="profile-container">
      <div class="profile__container__section basic-information">
        <BasicInformation></BasicInformation>
      </div>
      <div class="profile__container__section aditional-iformation">
        <AditionalInformation></AditionalInformation>
      </div>
      <div class="profile__container__section vehicle-information">
        <VehicleInformation></VehicleInformation>
      </div>
      <div class="profile__container__section information-income">
        <InformationIncome></InformationIncome>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import BasicInformation from "@/components/myProfile/BasicInformation.vue";
import AditionalInformation from "@/components/myProfile/AditionalInformation.vue";
import VehicleInformation from "@/components/myProfile/VehicleInformation.vue";
import InformationIncome from "@/components/myProfile/InformationIncome.vue";
</script>

<style scoped>
.profile-container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: calc((100% - 20px) * 0.5) calc((100% - 20px) * 0.5);
  grid-template-rows: 48% 48%;
  grid-template-areas:
    "basicInformation aditionalInformation"
    "vehicleInformation informationIncome";
  gap: 10px;
  padding: 10px;
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


.card {
  height: 100%;
  min-width: 100%;
  padding: 5px !important;
  border-radius: 20px;
  background: #EEEE;
  display: flex;
}

.card--direction-column {
  flex-direction: column;
}


@media (max-width: 480px) {
  .profile-container {
    grid-template-columns: 100%;
    grid-template-rows: 30%;
    grid-template-areas:
      "basicInformation"
      "aditionalInformation"
      "vehicleInformation"
      "informationIncome";
  }
}
</style>
