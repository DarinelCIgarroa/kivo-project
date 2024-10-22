<template>
  <q-card class="card-detail no-shadow">
    <q-card-section class="card-detail__content__img">
      <img :src="selectedStep.img" class="card-detail__img" />
    </q-card-section>
    <q-card-section class="card-detail__steps">
      <div class="card-detail__header">
        <span class="text-h6">{{ selectedStep.title }}</span>
        <span class="text-h6 text-body1">{{ selectedStep.subtitle }}</span>
      </div>
      <q-list v-for="(step, index) in selectedStep.steps" :key="index">
        <!-- Iteramos sobre cada paso -->
        <!-- <pre>{{ step }}</pre> -->
        <q-item v-for="(detail, i) in step.details" :key="i">
          <q-item-section avatar>
            <q-icon color="positive" name="fa-solid fa-check" />
          </q-item-section>

          <q-item-section>{{ detail }}</q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { toRef } from "vue";
// const emit = defineEmits(["closeDialog"]);
const props = defineProps({
  selectedStep: {
    type: Object,
  },
});

const selectedStep = toRef(props.selectedStep);

// const closeDialog = () => {
//   emit("closeDialog");
// };
</script>
<style scoped>
.card-detail {
  background: transparent;
  width: 80%;
  min-width: 50%;
  display: flex;
  justify-content: flex-start;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Sombra suave */
  overflow: visible; /* Permitimos que la imagen sobresalga sin ser cortada */
  position: relative;
}

.card-detail__content__img {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--card);
  width: 30%; /* Ancho del contenedor de la imagen */
  height: auto;
  position: relative;
  z-index: 1;
  border-top-left-radius: 20px !important;
  border-bottom-left-radius: 20px !important;
  overflow: visible;
  left: 3px;
}

.card-detail__img {
  width: 20em;
  height: auto;
  object-fit: contain;
  margin-left: -90%;
}

.card-detail__header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card-detail__steps {
  background: var(--card);
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
@media (max-width: 600px) {
  .card-detail {
    width: 100%;
    min-width: 100%;
    padding: 10px;
    flex-direction: column;
    border-radius: 15px;
  }
  .card-detail__content__img {
    padding: 10px;
    position: static;
    width: 100%;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    border-top-left-radius: 15px !important;
    border-top-right-radius: 15px !important;
    left: 0px;
  }
  .card-detail__img {
    width: 15em; /* Aumentamos el tamaño de la imagen */
    height: auto;
    object-fit: contain;
    margin-left: 0%;
  }
  .card-detail__steps {
    background: var(--card);
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top-right-radius: 0px; /* Borde redondeado en la esquina superior derecha */
    border-bottom-right-radius: 0px; /* Borde redondeado en la esquina inferior derecha */
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
}
</style>
