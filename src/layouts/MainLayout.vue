<template>
  <q-layout view="hHh lpR fFf" class="degraded-background">
    <div class="box-home">
      <BoxHome></BoxHome>
    </div>
    <q-page-container class="row">
      <q-header class="col-12 flex justify-start">
        <Navbar></Navbar>
      </q-header>
      <div class="content-home row col-12">
        <div class="rows col-xs-12 col-sm-12 col-md-6 column flex justify-center" style="z-index: 1;">
          <div class="service-title">
            <span style="font-size: 60px; padding: 0; margin: 0" class="text-h1 text-white">Mudanzas y fletes</span>
          </div>
          <div class="how-it-works-button">
            <q-btn size="18px" style="background-color: #000c0c;" rounded>
              <span style="color: white;">¿Cómo funciona?</span>
            </q-btn>
          </div>
          <div class="promotional-text q-my-md">
            <span style="font-size: 30px" class="text-subtitle2 text-white">
              Encuentra el Mejor Servicio de Flete y Mudanza Fácilmente</span>
          </div>
        </div>
        <div class="content-formRequest col-xs-12 col-sm-12 col-md-6 flex items-center justify-end">
          <FormRequest></FormRequest>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from "../components/NavbarMain.vue"
import FormRequest from "./partials/FormRequest.vue"
import BoxHome from "./partials/BoxHome.vue"
export default {
  name: "PageIndex",
  components: {
    Navbar,
    FormRequest,
    BoxHome
  },
  setup() {
    return {

    };
  }
};
</script>

<style scoped>
.degraded-background {
  background: var(--background);
  min-height: 100vh;
  padding: 2% 8%;
  background-color: rgb(9, 135, 51);
}

.q-page-container {
  padding: 0px 10px !important;
}

.q-header {
  background: none !important;
  position: relative;
}

.content-home {
  position: relative;
  min-height: 80vh;
  /* background-color: burlywood; */
}

.box-home {
  position: absolute;
  /* z-index: 10; */
}

@media only screen and (min-width: 300px) and (max-width: 599px) {
  .promotional-text {
    margin-top: 1em;
  }

  .box-home {
    height: 99%;
    background-color: cadetblue;
    /* z-index: 10; */
  }
}

@media only screen and (max-width: 600px) {

  /* Teléfonos móviles (en posición vertical) */
  .content-formRequest {
    margin-top: 2em;
    justify-content: center;
  }

  .promotional-text,
  .service-title,
  .how-it-works-button {
    text-align: center;
  }

  .promotional-text {
    margin-top: 2em;
  }
}

@media only screen and (min-width: 601px) and (max-width: 768px) {

  /* Estilos para teléfonos en horizontal y tablets pequeñas */
  .degraded-background {
    padding: 2% 5%;
  }

  .content-formRequest {
    margin-top: 2em;
    justify-content: center;
  }

  .promotional-text,
  .service-title,
  .how-it-works-button {
    text-align: center;
  }

  .promotional-text {
    margin-top: 2em;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {

  /* Estilos para tablets */

  .content-formRequest {
    margin-top: 2em;
    justify-content: center;
  }

  .promotional-text,
  .service-title,
  .how-it-works-button {
    text-align: center;
  }

  .promotional-text {
    margin-top: 2em;
  }
}
</style>
