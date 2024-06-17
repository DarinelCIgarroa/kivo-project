<template>
  <q-card-section class="col-md-5 col-xs-12 q-py-sm card__content-avatar">
    <q-img class="card__img"
      src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg"></q-img>
  </q-card-section>
  <q-card-section class="col-md-7 col-xs-12 card__info">
    <div class="card__header-info">
      <span class="text-h5 q-ml-xs q-my-sm">Información básica</span>
      <q-icon @click="openForm" class="card__icon" color="primary" size="1.5em"
        name="fa-solid fa-pen-to-square"></q-icon>
    </div>
    <div class="card__data">
      <div class="card__data-title"><span class="text-weight-bold">Nombre:</span></div>
      <div class="card__data-value"><span>Darinel</span></div>
    </div>
    <q-separator></q-separator>
    <div class="card__data">
      <div class="card__data-title"><span class="text-weight-bold">Apellidos:</span></div>
      <div class="card__data-value"><span>Cigarroa de Los Santos</span></div>
    </div>
    <q-separator></q-separator>
    <div class="card__data">
      <div class="card__data-title"><span class="text-weight-bold">Número:</span></div>
      <div class="card__data-value"><span>9612365046</span></div>
    </div>
    <q-separator></q-separator>
    <div class="card__data">
      <div class="card__data-title"><span class="text-weight-bold">Dirección:</span></div>
      <div class="card__data-value">
        <span>San Victorio 13, Pedregal de Sta Úrsula, Coyoacán, 04600 Ciudad de México, CDMX</span>
      </div>
    </div>
    <q-separator></q-separator>
  </q-card-section>
</template>
<script setup>
const emit = defineEmits(['openForm'])

const openForm = () => {
  emit('openForm')
}
</script>
<style scoped>
.card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.card__data {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3px;
}

.card__info {
  display: flex;
  padding: 0px !important;
  flex-direction: column;
  padding: 20px;
}

.card__icon {
  cursor: pointer;
}

.card__header-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 0px;
}

.card__data .card__data-title {
  display: flex;
  align-items: center;
  min-width: 25%;
}

.card__data-value {
  display: flex;
  align-items: center;
  min-width: 65%;
}
</style>
