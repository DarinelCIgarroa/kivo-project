<template>
  <q-page class="flex flex-center main-home row col-12">
    <div class="content-information row col-xs-12 col-sm-12 col-md-6">
      <div class="service-title">
        <span style="font-size: 50px; padding: 0; margin: 0" class="text-h1">Mudanzas y fletes</span>
      </div>
      <div class="how-it-works-button">
        <q-btn size="20px" color="primary">
          <span class="text-white">¿Cómo funciona?</span>
        </q-btn>
      </div>
      <div class="promotional-text q-my-md">
        <span style="font-size: 25px">
          Encuentra el Mejor Servicio de Flete y Mudanza Fácilmente.
        </span>
      </div>
    </div>
    <div class="content-formRequest col-xs-12 col-sm-12 col-md-6 flex items-center justify-end">
      <FormRequest></FormRequest>
    </div>
  </q-page>
  <q-page class="home-how-works row col-12">
    <HomeHowWorks></HomeHowWorks>
  </q-page>
</template>

<script setup>
import FormRequest from "../components/home/FormRequest.vue"
import HomeHowWorks from "../components/home/HomeHowWorks.vue"

defineOptions({
  name: 'IndexPage'
});
</script>

<style scoped>
.main-home {
  min-height: 100%;
}

.home-how-works {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-width: 100vh;
  min-height: 100vh;
}

.promotional-text {
  color: var(--homeText);
}

.how-it-works-button .q-btn {
  border: 1px solid #fff;
  transition: 0.5s;
}

.how-it-works-button .q-btn:hover {
  border-radius: 20px;
}

.service-title {
  color: var(--homeText);
}

.content-information {
  padding: 10px;
  /* background: blue !important; */
}

.content-formRequest {
  padding: 10px;
  /* background: rgb(40, 204, 122) !important; */
}

@media only screen and (max-width: 600px) {
  .main-home {
    display: flex;
    flex-direction: column;
    width: 100vh;
    /* background: red */
  }

  .content-information {
    background: blue !important;
    height: 50vh;
  }

  .content-formRequest {
    background: red;
    margin-top: 2em;
    justify-content: center;
  }

  .promotional-text,
  .service-title,
  .how-it-works-button {
    text-align: center;
  }

  .promotional-text {
    margin-top: 3em;
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
