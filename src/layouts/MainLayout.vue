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
        <div class="rows col-6 flex column flex justify-center" style="z-index: 1;">
          <div>
            <span style="font-size: 60px; padding: 0; margin: 0" class="text-h1 text-white">Mudanzas y fletes</span>
          </div>
          <div>
            <q-btn size="18px" style="background-color: #000;">
              <span style="color: white;">¿Cómo funciona?</span>
            </q-btn>
          </div>
          <div class="q-my-md">
            <span style="font-size: 30px" class="text-subtitle2 text-white">
              Encuentra el Mejor Servicio de Flete y Mudanza Fácilmente</span>
          </div>
        </div>
        <div class="col-6 flex q-px-md flex items-center justify-end">
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
}

.box-home {
  position: absolute;
  /* z-index: 10; */
}
</style>
