<template>
  <q-page class="flex flex-center main-home row col-12">
    <transition appear enter-active-class="animated zoomIn slower delay-05s " leave-active-class="animated fadeOut">
      <div class="content-information row col-xs-12 col-sm-12 col-md-6">
        <div class="service-title">
          <span style="font-size: 70px; padding: 0; margin: 0" class="text-h1">Mudanzas y fletes</span>
        </div>
        <div class="how-it-works-button">
          <q-btn @click="goToRoute" size="18px" color="primary">
            <span class="text-white">¿Cómo funciona?</span>
          </q-btn>
        </div>
        <div class="promotional-text q-my-md">
          <span style="font-size: 25px">
            Encuentra el Mejor Servicio de Flete y Mudanza Fácilmente.
          </span>
        </div>
      </div>
    </transition>
    <transition appear enter-active-class="animated zoomIn slower delay-05s " leave-active-class="animated fadeOut">
      <div class="content-formRequest col-xs-12 col-sm-12 col-md-6 flex items-center justify-end">
        <FormRequest></FormRequest>
      </div>
    </transition>
  </q-page>
</template>

<script setup>
import FormRequest from "../components/home/FormRequest.vue"
import { useRouter } from 'vue-router';

defineOptions({
  name: 'IndexPage'
});


const router = useRouter();

const goToRoute = () => {
  router.push('/how-does-it-work');
}

</script>

<style scoped>
.promotional-text {
  color: var(--homeText);
}

.how-it-works-button .q-btn {
  border: 1px solid #fff;
  transition: 0.4s;
}

.how-it-works-button .q-btn:hover {
  border-radius: 20px;
}

.service-title {
  color: var(--homeText);
}

.content-information {
  display: flex;
  flex-direction: column;
  padding: 10px;
  /* background: blue !important; */
}

.content-formRequest {
  display: flex;
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
    height: 50vh;
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
