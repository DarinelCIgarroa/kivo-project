<template>
  <q-page class="flex flex-center content-home row col-12">
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
    <div class="content-formRequest col-xs-12 col-sm-12 col-md-6 flex items-center justify-end" style="z-index: 1;">
      <FormRequest></FormRequest>
    </div>

  </q-page>
</template>

<script setup>
import FormRequest from "./FormRequest.vue"
defineOptions({
  name: 'IndexPage'
});
</script>
<style scoped>
.content-home {
  padding: 20px;
  min-height: 80vh !important;
  /* background-color: burlywood; */
}

@media only screen and (min-width: 300px) and (max-width: 599px) {
  .promotional-text {
    margin-top: 1em;
  }
}

@media only screen and (max-width: 600px) {
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