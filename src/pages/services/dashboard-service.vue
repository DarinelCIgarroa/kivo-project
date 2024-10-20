<template>
  <q-layout view="hHh Lpr fff">
    <q-page class="">
      <div class="my-services">
        <div class="my-service-headed col-12">
          <q-tabs
            indicator-color="transparent"
            active-color="white"
            class="bg-primary text-grey-5 shadow-3"
          >
            <q-tab name="header" label="Mis servicios"></q-tab>
          </q-tabs>
        </div>
      </div>

      <q-card>
        <q-card-section>
          <div class="service-container">
            <div class="card-income">Ingreso</div>
            <div class="card-sale">Ventas Totales</div>

            <div class="card-annual-sale">Ingreso Anual</div>

            <div class="card-table">Tabla</div>
          </div>
        </q-card-section>

        
      </q-card>

    </q-page>
  </q-layout>
</template>

<style scoped>
.service-container {
  width: 100%;
  max-width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-gap: 20px; /* Espaciado entre elementos */
  grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales */
  grid-template-rows: repeat(3, auto); /* 3 filas iguales */
}

.service-container > div {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
}

.card-table {
  grid-column-start: 1;
  grid-column-end: 4;
}
.q-tabs {
  width: 40%;
  border-radius: 15px;
}
.my-service-headed {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}
.my-services {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 100%;
  margin-top: 10px;
}
</style>
