<template>
  <q-page class="row col-12">
    <div class="profile-container">
      <div class="profile__container__section basic-information">
        <q-card class="card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="col-5 q-py-sm">
              <q-img style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;"
                src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg"></q-img>
            </q-card-section>

            <q-card-section class="col-7 card__info">
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

          </q-card-section>
        </q-card>
      </div>
      <div class="profile__container__section aditional-iformation">
        <q-card class="card card--direction-column" flat bordered>
          <span class="text-center text-h5">Evaluaciones</span>
          <div class="card__content-counts q-mt-md">
            <q-item>
              <q-item-section side>
                <q-avatar size="2.5em" square color="primary" text-color="white" icon="fa-solid fa-heart">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Me gusta</q-item-label>
                <q-item-label caption>1203</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section side>
                <q-avatar size="2.5em" square color="primary" text-color="white" icon="fa-solid fa-comment">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Comentarios</q-item-label>
                <q-item-label caption>600</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section side>
                <q-avatar size="2.5em" square color="primary" text-color="white" icon="fa-solid fa-star">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Evaluación</q-item-label>
                <q-item-label caption>3.5</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="card__ultimate-comments q-mt-xs">
            <!-- <q-separator></q-separator> -->

            <q-item>
              <q-item-section>
                <q-item-label>Single line item</q-item-label>
                <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit
                  elit.</q-item-label>
              </q-item-section>
              <q-separato></q-separato>
              <q-item-section side top>
                <q-item-label caption>2 min ago</q-item-label>
                <div class="text-orange">
                  <q-icon color="primary" name="star"></q-icon>
                  <q-icon color="primary" name="star"></q-icon>
                  <q-icon color="primary" name="star"></q-icon>
                </div>
              </q-item-section>
            </q-item>
            <q-separator></q-separator>
            <q-item class="q-my-md">
              <q-item-section>
                <q-item-label>Single line item</q-item-label>
                <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit
                  elit.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>2 min ago</q-item-label>
                <div class="text-orange">
                  <q-icon color="primary" name="star"></q-icon>
                  <q-icon color="primary" name="star"></q-icon>
                  <q-icon color="primary" name="star"></q-icon>
                </div>
              </q-item-section>
            </q-item>
            <q-separator></q-separator>
            <q-item class="q-my-md">
              <q-item-section>
                <q-item-label>Single line item</q-item-label>
                <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit
                  elit.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>2 min ago</q-item-label>
                <div class="text-orange">
                  <q-icon color="primary" name="star"></q-icon>
                  <q-icon color="primary" name="star"></q-icon>
                  <q-icon color="primary" name="star"></q-icon>
                </div>
              </q-item-section>
            </q-item>
          </div>
        </q-card>
      </div>
      <div class="profile__container__section vehicle-information">
        <q-card class="card row" flat bordered>
          <q-card-section style="height: 100%" class="col-6">
            <q-img style="width: 100%; height: 100%; object-fit: contain; border-radius: 15px;"
              src="https://fastly.picsum.photos/id/655/2000/1125.jpg?hmac=Uwp6LjnVtMcRT0nyC8GmWiNp7GFP02ipyf5uiePLE6Q"></q-img>
          </q-card-section>
          <q-card-section class="col-6">
            <span class="text-h6">Perfil del Vehículo</span>
            <div class="card__data">
              <div class="card__data-title"><span class="text-weight-bold">Tipo de Vehículo:</span></div>
              <div class="card__data-value"><span>Camioneta doble cabina alv</span></div>
            </div>
            <q-separator></q-separator>
            <div class="card__data">
              <div class="card__data-title"><span class="text-weight-bold">Marca:</span></div>
              <div class="card__data-value"><span>Cigarroa de Los Santos</span></div>
            </div>
            <q-separator></q-separator>
            <div class="card__data">
              <div class="card__data-title"><span class="text-weight-bold">Modelo:</span></div>
              <div class="card__data-value"><span>Corolla</span></div>
            </div>
            <q-separator></q-separator>
            <div class="card__data">
              <div class="card__data-title"><span class="text-weight-bold">Licencia:</span></div>
              <div class="card__data-value">
                <span>XTR-9074</span>
              </div>
            </div>
            <q-separator></q-separator>
            <div class="card__data">
              <div class="card__data-title"><span class="text-weight-bold">Número de placa:</span></div>
              <div class="card__data-value">
                <span>3C3C3C3C4FG567891</span>
              </div>
            </div>
            <q-separator></q-separator>
          </q-card-section>
        </q-card>
      </div>
      <div class="profile__container__section information-income">
        <q-card class="card card--direction-column" flat bordered>
          <div class="card__summary">
            <q-item>
              <q-item-section side>
                <q-avatar size="2.5em" color="primary" text-color="white" icon="fa-solid fa-wallet">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Ingresos este mes</q-item-label>
                <q-item-label caption>$3,423.00</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="card__content-chart">
            <apexchart height="260" width="590" type="area" :options="chartOptions" :series="series"></apexchart>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>


<script setup>
import { ref } from "vue";

const chartOptions = ref({
  chart: {
    type: 'area',
    tollbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
    curve: 'smooth'
  },
  markers: {
    size: 5,
    colors: ['#000'],
    strokeWidth: 1,
    hover: {
      size: 8
    }
  },
  // colors: ['#7a1b4a', 'BDBAB9'],
  title: {
    text: 'Últimos Dos Meses',
    align: 'center',
    style: {
      fontSize: '16px',
    },
  },
  // colors: ['#FF5733', '#335BFF'], // Colores personalizados para cada mes
  xaxis: {
    categories: [
      "Sem 1 Mayo", "Sem 2 Mayo", "Sem 3 Mayo", "Sem 4 Mayo",
      "Sem 1 Junio", "Sem 2 Junio", "Sem 3 Junio", "Sem 4 Junio"
    ]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    }
  }
});

const series = ref([{
  name: 'Mayo',
  data: [1000, 1200, 900, 1600]
}, {
  name: 'Junio',
  data: [1100, 1400, 1300, 0]
}]);

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

.card__info {
  display: flex;
  padding: 0px !important;
  flex-direction: column;
}

.card {
  height: 100%;
  min-width: 100%;
  /* min-height: 100%; */
  padding: 5px !important;
  border-radius: 20px;
  background: #EEEE;
  display: flex;
  /*justify-content: center;
  align-items: center; */
}

.card--direction-column {
  flex-direction: column;
}

.card__data {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3px;
  /* margin: 1px; */
}

.card__data .card__data-title {
  /* padding: 2px; */
  display: flex;
  align-items: center;
  min-width: 25%;
  /* background: rgb(8, 66, 158); */
}

.card__data-value {
  /* padding: 2px; */
  display: flex;
  align-items: center;
  min-width: 65%;
  /* background: rgb(4, 174, 118); */
}

.card__content-counts {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card__ultimate-comments {
  width: 100%;
  height: 30%;
}

.card__summary {
  width: 100%;
}

.card__content-chart {
  height: 80%;
  width: 100%;
  max-width: 100%;
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
