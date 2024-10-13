<template>
  <q-page class="main-home grid-container" :class="{ active: isActive }">
    <div class="left-section" :class="{ 'move-right': isActive }">
      <img :src="homeKivo" alt="Camión de mudanzas" />
      <div class="button-container">
        <span>Encuentra el mejor servicio de fletes y mudanzas fácilmente</span>
        <q-btn
          unelevated
          rounded
          color="accent"
          :label="labelButton"
          class="q-mt-md"
          @click="toggleMove"
        />
      </div>
    </div>
    <div class="right-section" :class="{ 'move-left': isActive }">
      <FormRequestRegister v-if="isActive" />
      <FormRequestService v-else @code-validation="codeValidation" />
    </div>
    <q-dialog v-model="showCodeVerification">
      <CodeVerification  />
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import homeKivo from "@/assets/img/home/homeKivo.svg";
import FormRequestRegister from "../components/home/FormRequestRegister.vue";
import FormRequestService from "../components/home/FormRequestService.vue";
import CodeVerification from "../components/home/CodeVerification.vue";

let labelButton = "Quiero ser conductor";
// Estado para controlar la animación IsActive false = cliente, contrario conductor
const isActive = ref(false);
const showCodeVerification = ref(false);
// Función para alternar el estado
const toggleMove = () => {
  isActive.value = !isActive.value;
  if (isActive.value) {
    labelButton = "Quiero ser contratista";
  } else {
    labelButton = "Quiero ser conductor";
  }
};

const codeValidation = () => {
  console.log("codeValidation");
  showCodeVerification.value = true;
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 5fr 2fr;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.left-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.left-section {
  /* background: red; */
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: relative;
  transition: transform 0.8s ease-in-out, clip-path 0.8s ease-in-out;
  /* Transición suave */
}

.right-section {
  background: linear-gradient(
    to right,
    rgba(228, 228, 228, 0.937),
    rgba(255, 255, 255, 0.937)
  );
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  z-index: 2;
  transition: transform 0.8s ease-in-out, background 0.8s ease-in-out;
  /* Transición de color suave */
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
  /* Diagonal inicial */
}

/* Efecto cuando se activa la clase 'move-right' */
.move-right {
  transform: translateX(33vw);
  background: linear-gradient(
    to right,
    rgba(238, 237, 237, 0.937),
    rgba(255, 255, 255, 0.937)
  );
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
  /* Ajuste de la diagonal */
}

/* Cambios cuando la clase 'move-left' está activa */
.move-left {
  background: #fff;
  /* background: rgb(26, 102, 92); */
  transform: translateX(-52vw);
  clip-path: none !important;
}

.button-container {
  position: absolute;
  bottom: 12%;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.button-container span {
  font-size: 20px;
}

/* Para pantallas más pequeñas */
@media (max-width: 600px) {
  .grid-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .left-section,
  .right-section {
    width: 100%;
    height: auto;
  }
}

@media (min-width: 601px) and (max-width: 899px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }

  .left-section,
  .right-section {
    width: 100%;
  }
}
</style>
