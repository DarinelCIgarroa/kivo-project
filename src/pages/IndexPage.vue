<template>
  <q-page class="main-home grid-container">
    <!-- Sección Izquierda con la imagen del camión -->
    <div class="left-section">
      <img :src="homeKivo" alt="Camión de mudanzas" />
    </div>

    <!-- Sección Derecha con el formulario -->
    <div class="right-section">
      <FormRequestRegister />
    </div>

    <!-- Línea divisoria diagonal -->
    <div class="divider"></div>

    <!-- Botón centrado en la línea divisoria -->
    <div class="center-button">
      <q-btn icon="chevron_right" class="button-center" />
    </div>
  </q-page>
</template>

<script setup>
import homeKivo from '@/assets/img/home/homeKivo.svg';
import FormRequestRegister from "../components/home/FormRequestRegister.vue";
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 5fr 2fr;
  /* Aumentamos el tamaño de la derecha */
  height: 100vh;
  position: relative;
}

.left-section,
.right-section {
  background-color: white;
  /* Ambos divs tienen fondo blanco */
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Línea divisoria diagonal sólida */
.divider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  pointer-events: none;
}

.divider::before {
  content: "";
  position: absolute;
  top: 0;
  left: calc(60%);
  /* Ajustamos la proporción de la línea divisoria */
  width: 0;
  height: 100%;
  border-left: 2px solid black;
  /* Línea divisoria negra */
  transform: skewX(-10deg);
  /* Inclinación de la línea */
  z-index: 2;
}

/* Botón centrado en la línea divisoria */
.center-button {
  position: absolute;
  top: 50%;
  /* Centramos verticalmente */
  left: calc(60% + 1px);
  /* Ajuste exacto para alinear el botón con la línea */
  transform: translate(-50%, -50%);
  /* Alineamos el botón con la línea diagonal */
  z-index: 3;
}

/* Ajustamos el tamaño y hacemos el botón circular */
.button-center {
  width: 50px;
  height: 50px;
  background-color: var(--primary);
  /* Color de fondo */
  border-radius: 50%;
  /* Hacer que el botón sea completamente circular */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  /* Color del icono */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Sombra para el botón */
}

.right-section {
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  /* Mantiene la sección derecha sobre la línea */
}
</style>
