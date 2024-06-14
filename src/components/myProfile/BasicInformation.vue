<template>
  <q-card class="card row" flat bordered>
    <q-card-section class="col-md-5 col-xs-12 q-py-sm">
      <q-img class="card__img"
        src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg"></q-img>
    </q-card-section>
    <q-card-section class="col-md-7 col-xs-12 card__info">
      <span class="text-h5 q-ml-xs q-my-sm">Información básica</span>
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
  </q-card>
</template>

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
